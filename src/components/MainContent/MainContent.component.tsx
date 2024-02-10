import React, { useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { IAgent } from "../../types";

interface Props {
  agent: IAgent;
}

export const MainContent: React.FC<Props> = ({ agent }) => {
  useEffect(() => {
    console.log(agent, "agent");
  }, [agent]);

  return (
    <Box zIndex="1">
      <Grid container height={"100%"}>
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
          <Stack
            px="5%"
            py={{ xs: "5%", md: "10%" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Typography variant="subtitle1" mb={"-10px"}>
              {agent.rol}
            </Typography>
            <Typography variant="h1">{agent.name}</Typography>
            <Typography variant="subtitle1" mb={"-10px"}>
              {agent.bio}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
