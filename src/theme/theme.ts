import { themeBaseDefaults } from ".";
import "../index.css";

export enum ColorsEnum {
  primary = "#eaeeb2",
  secondary = "#81c6b7",
  red = "#d83946",
  grey = "#ccccc7",
  borderColor = "#5f605f",
}

import { createTheme, responsiveFontSizes } from "@mui/material";
import { breakpointVal } from "../styles";
const fontSize = (from: number, to: number) =>
  breakpointVal("fontSize", from, to, themeBaseDefaults.breakpoints.values);

export const theme = createTheme({
  typography: {
    h1: {
      ...fontSize(40, 60),
      fontFamily: "tungstenBold",
      color: ColorsEnum.primary,
      textTransform: "uppercase",

      //fontSize: "60px"
    },
    h2: {
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      fontSize: "2rem",
    },
  },
});
