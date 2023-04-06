import Button from "@mui/material/Button";

export default function CopyToClipboard() {
  return (
    <Button
      type="button"
      variant="outlined"
      onClick={() => {
        // navigator.clipboard.writeText() is an async function we have to wait for
        navigator.clipboard.writeText(answer?.answer.content).then(
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
