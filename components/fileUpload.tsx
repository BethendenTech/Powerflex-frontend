import { useDropzone } from 'react-dropzone';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

type ComponentProps = {
    label: string;
    accept: Record<string, string[]>; // Correct type for the accept prop
    maxSize: number,
    maxFiles: number,
};

const FileUploadComponent = (props: ComponentProps) => {
    const { label, accept, maxSize, maxFiles } = props;

    const { acceptedFiles, fileRejections, open, getRootProps, getInputProps } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept, // Use the accept prop dynamically
        maxSize,
        maxFiles
    });

    const files = acceptedFiles.map(file => (
        <ListItem key={file.path}>
            <ListItemText primary={`${file.path} - ${file.size} bytes`} />
        </ListItem>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <ListItem key={file.path}>
            {file.path} - {file.size} bytes
            <List>
                {errors.map(e => (
                    <ListItem key={e.code}>
                        <ListItemText primary={e.message} />
                    </ListItem>
                ))}
            </List>
        </ListItem>
    ));

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {label}
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ borderStyle: "dotted", borderWidth: 2 }} textAlign="center" padding={2}>
                    <CloudUploadOutlinedIcon />
                    <Box {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Typography>Choose a file or drag & drop it here</Typography>
                        <Typography>Supported formats: JPEG, PNG, PDF, MP4 up to 10MB</Typography>

                        <Box mt={2}>
                            <Button variant='contained' onClick={() => open()}>Browse File</Button>
                        </Box>
                    </Box>
                    {files && files.length > 0 && <Box mt={2}>
                        <Alert severity="success">
                            <List>{files}</List>
                        </Alert>
                    </Box>}
                    {fileRejectionItems && fileRejectionItems.length > 0 && <Box mt={2}>
                        <Alert severity="error">
                            <List>{fileRejectionItems}</List>
                        </Alert>
                    </Box>}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default FileUploadComponent;
