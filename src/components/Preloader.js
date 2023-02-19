import { Box } from "@mui/material";
import React from "react";

const Preloader = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <div class="mosaic-loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-6"></div>
      </div>
    </Box>
  );
};

export default Preloader;
