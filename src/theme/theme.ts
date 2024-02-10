import { themeBaseDefaults } from ".";
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
  breakpointVal("fontSize", from, to, themeBaseDefaults.breakpoints.values);

export const theme = createTheme({
  typography: {
    h1: {
      ...fontSize(60, 90),
      fontFamily: "tungstenBold",
      color: ColorsEnum.primary,
      textTransform: "uppercase",
    },
    subtitle1: {
      ...fontSize(15, 20),
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontWeight: "lighter",
    },

    h3: {
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      ...fontSize(20, 30),
      fontWeight: "lighter",
    },
    body1: {
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      ...fontSize(20, 30),
    },
  },
});
