import { useDropzone } from 'react-dropzone';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Alert, Box, Button, Checkbox, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useState } from 'react';
import { CheckboxContainer, CustomAccordionSummary, CustomExpandIcon, Title, TitleContainer } from './form/style';
import Image from 'next/image';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ArrowUp from "../public/images/web/arrowlist-down.svg";
import ArrowDown from "../public/images/web/arrowlist-up.svg";

type ComponentProps = {
    name: string;
    label: string;
    accept: Record<string, string[]>; // Correct type for the accept prop
    maxSize: number;
    maxFiles: number;
    setValue: any;
    supportFormat: string;
    acceptableText: string;
    acceptedLabel: string;
    subNote: string;
};

const FileUploadComponent = (props: ComponentProps) => {
    const { name, label, accept, maxSize, maxFiles, setValue, supportFormat, acceptedLabel, acceptableText, subNote } = props;
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState<string[]>([]);
    const [uploadError, setUploadError] = useState<string[]>([]);

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const [expanded, setExpanded] = useState(false);

    const handleAccordionToggle = () => {
        setExpanded(!expanded);
    };

    const { acceptedFiles, fileRejections, open, getRootProps, getInputProps } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept,
        maxSize,
        maxFiles,
    });

    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload-file/`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setValue(name, data.file)
                setUploadSuccess((prev) => [...prev, file.name]);
            } else {
                const errorData = await response.json();
                setUploadError((prev) => [...prev, `${file.name}: ${errorData.error || 'Failed to upload'}`]);
            }
        } catch (error) {
            setUploadError((prev) => [...prev, `${file.name}: ${error.message}`]);
        }
    };

    const handleUpload = async () => {
        setUploading(true);
        setUploadSuccess([]);
        setUploadError([]);

        for (const file of acceptedFiles) {
            await uploadFile(file);
        }

        setUploading(false);
    };

    React.useEffect(() => {
        if (acceptedFiles?.length > 0) {
            handleUpload()
        }
    }, [acceptedFiles])

    const files = acceptedFiles.map((file) => (
        <ListItem key={file.path}>
            <ListItemText primary={`${file.path} - ${file.size} bytes`} />
        </ListItem>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <ListItem key={file.path}>
            {file.path} - {file.size} bytes
            <List>
                {errors.map((e) => (
                    <ListItem key={e.code}>
                        <ListItemText primary={e.message} />
                    </ListItem>
                ))}
            </List>
        </ListItem>
    ));

    return (
        <Accordion
            expanded={expanded}
            onChange={handleAccordionToggle}
            sx={{
                "&.MuiAccordion-root": {
                    border: `1px solid #5C69FF`,
                    borderRadius: "12px",
                },
                boxShadow: "none",
            }}
        >
            <CustomAccordionSummary
            >
                <Box sx={{ padding: acceptedLabel ? 0 : 2.5 }}>
                    {acceptedLabel && (
                        <Tooltip
                            title={
                                <Box sx={{ padding: 1 }}>
                                    <ul style={{ margin: 0, paddingLeft: "1.2em", listStyleType: "disc" }}>
                                        {acceptedLabel.split(/,(?![^(]*\))/).map((item, index) => (
                                            <li key={index} style={{ fontSize: "0.9em", lineHeight: "1.5" }}>
                                                {item.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            }
                            placement="right"
                            arrow
                        >
                            <IconButton sx={{ color: '#424242' }}>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
                <Box sx={{ position: "relative", width: "100%" }}>
                    {/* Title */}
                    <TitleContainer>
                        <Title>{label}</Title>
                    </TitleContainer>

                    {/* Checkbox */}
                    <CheckboxContainer sx={{ top: subNote ? "-10px" : "-14px" }}>
                        <Checkbox
                            size='large'
                            sx={{
                                "&.MuiCheckbox-root": {
                                    color: "#257FE6",
                                },
                            }}
                            checked={checked}
                            onChange={(e) => {
                                e.stopPropagation();
                                handleCheckboxChange();
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </CheckboxContainer>

                    <Box textAlign="center" p={0}>
                        <Typography sx={{
                            fontSize: "11.87px",
                            fontWeight: 500,
                            lineHeight: "16.57px",
                            textAlign: "center",
                            color: "#424242"
                        }}>
                            {subNote}
                        </Typography>
                    </Box>

                    {/* Custom Expand/Collapse Icon */}
                    <CustomExpandIcon>
                        <Image
                            src={expanded ? ArrowDown : ArrowUp}
                            alt={expanded ? "Collapse" : "Expand"}
                            width={20}
                            height={20}
                        />
                    </CustomExpandIcon>
                </Box>
            </CustomAccordionSummary>
            <AccordionDetails>
                <Box sx={{ borderStyle: 'dashed', borderWidth: 2, borderRadius: '12px' }} textAlign="center" padding={2}>
                    <CloudUploadOutlinedIcon />
                    <Box {...getRootProps({ className: 'dropzone' })} mt={3}>
                        <input {...getInputProps()} />
                        <Typography sx={{
                            fontSize: "13.69px",
                            fontWeight: 700,
                            lineHeight: "16.57px",
                            textAlign: "center",

                        }}>Choose a file or drag & drop it here</Typography>

                        <Typography sx={{
                            fontSize: "11.87px",
                            fontWeight: 500,
                            lineHeight: "16.57px",
                            textAlign: "center",
                            color: "#A9ACB4"
                        }}>{supportFormat}</Typography>

                        {acceptableText && <Typography sx={{
                            fontSize: "11.87px",
                            fontWeight: 500,
                            lineHeight: "16.57px",
                            textAlign: "center",
                            color: "#A9ACB4"
                        }}>{acceptableText}</Typography>}

                        <Box mt={2}>
                            <Button sx={{
                                padding: "6px 20px"
                            }} variant="contained" onClick={() => open()}>
                                Browse File
                            </Button>
                        </Box>
                    </Box>
                    {files.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="success">
                                <List>{files}</List>
                            </Alert>
                        </Box>
                    )}
                    {fileRejectionItems.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="error">
                                <List>{fileRejectionItems}</List>
                            </Alert>
                        </Box>
                    )}


                    {uploadSuccess.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="success">
                                <Typography>Uploaded Successfully:</Typography>
                                <List>
                                    {uploadSuccess.map((file) => (
                                        <ListItem key={file}>
                                            <ListItemText primary={file} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Alert>
                        </Box>
                    )}
                    {uploadError.length > 0 && (
                        <Box mt={2}>
                            <Alert severity="error">
                                <Typography>Upload Errors:</Typography>
                                <List>
                                    {uploadError.map((error, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={error} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Alert>
                        </Box>
                    )}
                </Box>
            </AccordionDetails>
        </Accordion >
    );
};

export default FileUploadComponent;
