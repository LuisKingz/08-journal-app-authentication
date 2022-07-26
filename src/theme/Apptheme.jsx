import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { purpleTheme } from './'

export const Apptheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
        { children }
    </ThemeProvider>
  );
};
