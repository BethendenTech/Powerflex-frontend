import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';

export const FaqComponent = () => {
    const [faqData, setFaqData] = React.useState<any>([]);

    React.useEffect(() => {
        getFaqData();
    }, [])

    const getFaqData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms/faqs/`);

        if (response.ok) {
            const data = await response.json();
            setFaqData(data)
        }
    }


    return (
        <Box>
            <Typography component="h2" variant='h4'>Frequently Asked Questions</Typography>


            {faqData && faqData.map((value, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            {value.name}
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ whiteSpace: "pre-line" }}>
                                {value.description}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                );
            })}

        </Box>
    )
}




