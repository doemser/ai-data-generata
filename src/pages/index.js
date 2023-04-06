import Grid from "@mui/material/Grid";
import CopyToClipboard from "@/components/CopyToClipboard";
import DataForm from "@/components/DataForm";
import JSONOutput from "@/components/JSONOutput";

const flexCenter = {
  display: "flex",
  justifyContent: "center",
};

export default function Home() {
  return (
    <>
      <Grid container spacing={1} mb={4}>
        <Grid item xs={12} sx={flexCenter}>
          <DataForm />
        </Grid>

        <Grid item xs={12} sx={flexCenter}>
          <CopyToClipboard />
        </Grid>

        <Grid item xs={12} sx={flexCenter}>
          <JSONOutput />
        </Grid>
      </Grid>
    </>
  );
}
