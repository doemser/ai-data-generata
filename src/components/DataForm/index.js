import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import AccordionTemplate from "@/components/Accordion";

export default function DataForm({ fetcher, interfaceChips, config }) {
  return (
    <Stack sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Stack
          component="form"
          direction="row"
          spacing={2}
          alignItems="center"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            fetcher(data);
          }}
        >
          <FormControl sx={{ minWidth: 120 }}>
            <TextField
              id="persona"
              label="Data of:"
              name="persona"
              variant="outlined"
              defaultValue="fish"
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Create JSON {"{..}"}
          </Button>
        </Stack>
        {interfaceChips}
        <AccordionTemplate summary="Settings" details={config} />
      </Paper>
    </Stack>
  );
}
