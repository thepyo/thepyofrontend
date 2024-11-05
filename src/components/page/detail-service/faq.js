import { Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq({data}) {
    return (
        <>
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                {data?.title_faq}
            </Typography>

            {data?.faq?.map((item,key) =>
                <Accordion defaultExpanded={key === 0 ? true : false} key={key}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontWeight={600}>{item?.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           {item?.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </>
    )
}