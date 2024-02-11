import "../index.css";

export enum ColorsEnum {
  primary = "#eaeeb2",
  secondary = "#81c6b7",
  red = "#d83946",
  grey = "#ccccc7",
  borderColor = "#5f605f",
}

import { createTheme } from "@mui/material";
import { breakpointVal } from "../styles";
const fontSize = (from: number, to: number) =>
  breakpointVal("fontSize", from, to, {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1200,
    xl: 1536,
  });

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "60px",
      ...fontSize(60, 90),
      fontFamily: "tungstenBold",
      color: ColorsEnum.primary,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "20px",
      ...fontSize(20, 25),
      fontFamily: "tungstenBold",
      textTransform: "uppercase",
      color: "white",
      letterSpacing: "1px",
    },
    subtitle1: {
      fontSize: "15px",
      ...fontSize(15, 20),
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontWeight: "lighter",
    },
    body1: {
      ...fontSize(15, 22),

      fontFamily: "DINNextW1G-Regular",
      color: "red",
      fontWeight: "bold",
      // fontWeight: "lighter",
    },
    body2: {
      fontSize: "15px",
      ...fontSize(15, 20),
      fontFamily: "DINNextW1G-Regular",
    },

    h3: {
      fontSize: "20px",
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      ...fontSize(20, 30),
      fontWeight: "lighter",
    },
  },
});
