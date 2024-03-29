import { SvgIcon } from "@mui/material";
import * as React from "react";

interface Props {
  skillSelected?: number;
  i?: number;
  width: any;
  height: any;
}
export const DefaultIcon: React.FC<Props> = ({
  skillSelected,
  i,
  width,
  height,
}) => (
  <SvgIcon
    sx={{
      width: width,
      height: height,
      fill: "white",
      opacity: skillSelected && i ? (skillSelected === i ? 1 : 0.5) : 1,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 32 32"
    >
      <path d="M19.8 26.1h-7.4c-.3 0-.5-.1-.6-.3-2.5-3.2-5.1-6.3-7.6-9.5-.1-.2-.2-.3-.2-.5V6.6c0-.1 0-.2.1-.2h.1c5.2 6.5 10.4 13 15.5 19.5 0 0 0 .1.1.1v.1zM27.8 16.3c-.7.9-1.5 1.8-2.2 2.8-.2.2-.4.3-.6.3H17.8c-.1 0-.2-.1-.1-.2 0 0 0-.1.1-.1 2.4-3 4.7-5.9 7.1-8.9 1-1.2 2-2.5 2.9-3.7 0-.1.1-.1.2-.1h.1V15.7c-.1.3-.2.5-.3.6z" />
    </svg>
  </SvgIcon>
);
