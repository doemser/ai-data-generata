import Grid from "@mui/material/Grid";
import SVGIcon from "../SVGIcon";

import { useState, useId } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DataConfig from "../DataConfig";

export default function Settings() {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  const handleChange = () => (_, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };
  return (
    <Grid container item xs={12} py={1}>
      <Accordion
        expanded={expanded}
        onChange={handleChange()}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<SVGIcon variant="expand" />}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
        >
          Settings
        </AccordionSummary>
        <AccordionDetails>
          <DataConfig />
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
