import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
