import Button from "@mui/material/Button";
import useStore from "../../hooks/useStore";

export default function CopyToClipboard() {
  const answer = useStore((state) => state.answer);
  return (
    <Button
      type="button"
      variant="outlined"
      onClick={() => {
        // navigator.clipboard.writeText() is an async function we have to wait for
        navigator.clipboard.writeText(answer?.content).then(
          () => {
            alert(`copied JSON to the clipboard`);
          },
          (error) => {
            console.error(error);
            alert(`ERROR - Okay that went wrong`);
          }
        );
      }}
    >
      copy JSON {"{..}"}
    </Button>
  );
}
