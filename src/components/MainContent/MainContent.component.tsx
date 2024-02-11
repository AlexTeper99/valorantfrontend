import React, { useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { IAgent } from "../../types";
import { CharacterDescription } from "../CharacterDescription/CharacterDescription.component";

interface Props {
  agent: IAgent;
}

export const MainContent: React.FC<Props> = ({ agent }) => {
  return (
    <Box zIndex="1">
      <Grid
        container
        height={"100%"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
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
                opacity: "0.5",
                zIndex: 1,
                minHeight: "calc(100vh - 200px)",
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx="5%" my={{ xs: "5%", md: "20px" }}>
            {agent ? <CharacterDescription agent={agent} /> : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
