import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import useStore from "@/hooks/useStore";

export default function DataConfigForm() {
  const dataTypeAdd = useStore((state) => state.dataTypeAdd);
  const amount = useStore((state) => state.amount);
  const handleAmount = useStore((state) => state.handleAmount);

  const [dataType, setDataType] = useState({ value: "", type: "string" });

  const handleValueChange = (event) => {
    setDataType({ ...dataType, value: event.target.value });
  };

  const handleTypeChange = (event) => {
    setDataType({ ...dataType, type: event.target.value });
  };

  return (
    <Stack sx={{ p: 2 }}>
      <Stack spacing={2} m={2} pb={2} alignItems="center">
        <Typography>Data Objects: {amount} </Typography>
        <Slider
          marks
          step={1}
          max={20}
          aria-label="amountSlider"
          valueLabelDisplay="auto"
          value={amount}
          onChange={(event) => {
            handleAmount(event.target.value);
          }}
        />
      </Stack>
      <Paper
        component="form"
        elevation={3}
        sx={{ p: 2 }}
        onSubmit={(event) => {
          event.preventDefault();
          dataTypeAdd(dataType);
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl sx={{ minWidth: 120 }}>
            <TextField
              required
              id="dataValue"
              label="Add type of data:"
              name="dataValue"
              variant="outlined"
              value={dataType.value}
              onChange={handleValueChange}
            />
          </FormControl>
          <Select
            id="dataTypes"
            label="Data type"
            value={dataType.type}
            onChange={handleTypeChange}
          >
            <MenuItem value="string">String</MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="boolean">Boolean</MenuItem>
          </Select>

          <Button variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
