import { useDropzone } from 'react-dropzone';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useState } from 'react';

type ComponentProps = {
    name: string;
    label: string;
    accept: Record<string, string[]>; // Correct type for the accept prop
    maxSize: number;
    maxFiles: number;
    setValue: any
};

const FileUploadComponent = (props: ComponentProps) => {
    const { name, label, accept, maxSize, maxFiles, setValue } = props;
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState<string[]>([]);
    const [uploadError, setUploadError] = useState<string[]>([]);

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
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                {label}
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ borderStyle: 'dotted', borderWidth: 2 }} textAlign="center" padding={2}>
                    <CloudUploadOutlinedIcon />
                    <Box {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Typography>Choose a file or drag & drop it here</Typography>
                        <Typography>Supported formats: JPEG, PNG, PDF, MP4 up to 10MB</Typography>

                        <Box mt={2}>
                            <Button variant="contained" onClick={() => open()}>
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
        </Accordion>
    );
};

export default FileUploadComponent;
