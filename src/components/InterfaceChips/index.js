import List from "@mui/material/List";
import Chip from "@mui/material/Chip";

export default function InterfaceChips({ dataKeys, onDataTypeDelete }) {
  return (
    <List>
      {dataKeys.map((key) => (
        <Chip
          key={key.id}
          label={`${key.value}: ${key.type}`}
          variant="outlined"
          onDelete={() => {
            onDataTypeDelete(key.id);
          }}
        />
      ))}
    </List>
  );
}
