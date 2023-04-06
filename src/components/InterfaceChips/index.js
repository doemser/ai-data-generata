import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import useStore from "@/hooks/useStore";

export default function InterfaceChips() {
  const dataTypes = useStore((state) => state.dataTypes);
  const dataTypeDelete = useStore((state) => state.dataTypeDelete);
  return (
    <List>
      {dataTypes.map((type) => (
        <Chip
          key={type.id}
          label={`${type.value}: ${type.type}`}
          variant="outlined"
          onDelete={() => {
            dataTypeDelete(type.id);
          }}
        />
      ))}
    </List>
  );
}
