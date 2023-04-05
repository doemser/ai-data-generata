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

export default function DataConfigForm({
  onDataTypeSubmit,
  dataAmount,
  onDataAmount,
}) {
  const [dataType, setDataType] = useState({ value: "", type: "string" });

  const handleValueChange = (event) => {
    setDataType({ ...dataType, value: event.target.value });
  };

  const handleTypeChange = (event) => {
    setDataType({ ...dataType, type: event.target.value });
  };

  return (
    <Stack sx={{ p: 2 }}>
      <Paper
        component="form"
        elevation={3}
        sx={{ p: 2 }}
        onSubmit={(event) => {
          event.preventDefault();
          onDataTypeSubmit(dataType);
        }}
      >
        <Stack spacing={2} m={2} pb={2} alignItems="center">
          <Typography>Data Objects: {dataAmount} </Typography>
          <Slider
            marks
            step={1}
            max={10}
            aria-label="amountSlider"
            valueLabelDisplay="auto"
            value={dataAmount}
            onChange={(event) => {
              onDataAmount(event.target.value);
            }}
          />
        </Stack>
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
            <MenuItem value="undefined">Undefined</MenuItem>
            <MenuItem value="null">Null</MenuItem>
            <MenuItem value="symbol">Symbol</MenuItem>
          </Select>

          <Button variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
