import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import DataForm from "@/components/DataForm";
import DataConfigForm from "@/components/DataConfigForm";
import InterfaceChips from "@/components/InterfaceChips";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [amount, setAmount] = useState(6);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataKeys, setDataKeys] = useState([
    { id: "asdSa", value: "id", type: "string" },
    { id: "oIhYa", value: "name", type: "string" },
  ]);

  async function fetcher(data) {
    try {
      setLoading(true);
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, dataKeys, amount }),
      });
      if (response.ok) {
        const result = await response.json();
        setAnswer(result);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleDataTypeSubmit(type) {
    setDataKeys([...dataKeys, { id: nanoid(6), ...type }]);
  }

  function handleDataTypeDelete(id) {
    setDataKeys(dataKeys.filter((key) => key.id !== id));
  }

  function handleDataAmount(newAmount) {
    setAmount(newAmount);
  }

  // Quick Fix from here: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/509
  const [style, setStyle] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/material-dark").then(
      (mod) => setStyle(mod.default)
    );
  });

  return (
    <>
      <Grid container spacing={1} mb={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DataForm
            fetcher={fetcher}
            interfaceChips={
              <InterfaceChips
                dataKeys={dataKeys}
                onDataTypeDelete={handleDataTypeDelete}
              />
            }
            config={
              <DataConfigForm
                dataAmount={amount}
                onDataTypeSubmit={handleDataTypeSubmit}
                onDataAmount={handleDataAmount}
              />
            }
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                {answer ? answer?.answer.content : "{}"}
              </SyntaxHighlighter>
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
}
