import { Alert } from "@mui/material";
import { STATUS_STYLE } from "../../utils/style.js";

export default function ScreenError() {
  return (
    <Alert variant="outlined" severity="error" sx={STATUS_STYLE}>
      Unable to load the Pokémon. Check your connection and refresh the page.
    </Alert>
  );
}
