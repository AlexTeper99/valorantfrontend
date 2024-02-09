import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { IAgent } from "../../types";

interface Props {
  agent: IAgent;
}

export const MainContent: React.FC<Props> = ({ agent }) => {
  useEffect(() => {
    console.log(agent, "agent");
  }, [agent]);

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "auto",
          height: "100%",
          justifyItems: "center",
        }}
      >
        <img
          src={agent.background}
          alt={`${agent.name} background`}
          className="characterImg"
          style={{
            opacity: "0.8",
            zIndex: 1,
          }}
        />

        <img
          src={agent.image}
          alt={`${agent.name} image`}
          className="characterImg"
          style={{
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};
