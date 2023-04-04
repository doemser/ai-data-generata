import Grid from "@mui/material/Grid";
import SVGIcon from "@/components/SVGIcon";

import { useState, useId } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function AccordionTemplate({ summary, details }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container item xs={12} py={1}>
      <Accordion
        expanded={expanded === `panel-${id}`}
        onChange={handleChange(`panel-${id}`)}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<SVGIcon variant="expand" />}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </Grid>
  );
}
