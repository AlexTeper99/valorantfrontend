import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
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
          <Box
            width="100%"
            height="100%"
            sx={{ backgroundColor: "red", opacity: "0.5" }}
            maxHeight="100%"
          >
            <Typography variant="h1">
              Player skills and abilities will be displayed here
            </Typography>
            <Typography variant="h1">
              Player skills and abilities will be displayed here
            </Typography>
            <Typography variant="h1">
              Player skills and abilities will be displayed here
            </Typography>
            <Typography variant="h1">
              Player skills and abilities will be displayed here
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
