import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState, useEffect } from "react";
import useStore from "@/hooks/useStore";

export default function JSONOutput() {
  const answer = useStore((state) => state.answer);
  const loading = useStore((state) => state.loading);

  // Quick Fix from here: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/509
  const [style, setStyle] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/material-dark").then(
      (mod) => setStyle(mod.default)
    );
  });
  return (
    <>
      {loading ? (
        <Stack pt={4}>
          <CircularProgress />
        </Stack>
      ) : (
        <Stack sx={{ minWidth: { xs: "400px", sm: "600px", md: "900px" } }}>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={style}
            customStyle={{ borderRadius: "25px" }}
          >
            {answer.content ? answer?.content : "{}"}
          </SyntaxHighlighter>
        </Stack>
      )}
    </>
  );
}
