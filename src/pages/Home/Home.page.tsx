import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useAgents } from "../../hooks";
import { CharacterSwiper, ValorantLoadingLogo } from "../../components";
import { loadingStyleContainer } from "./Home.styles";
import { IAgent } from "../../types";

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  const [currentAgent, setcurrentAgent] = useState<IAgent>();

  useEffect(() => {
    setcurrentAgent(agents[0]);
  }, [!isLoading]);

  return (
    <Box
      height="100vh"
      sx={{
        background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            ...loadingStyleContainer,
          }}
        >
          <ValorantLoadingLogo />
        </Box>
      ) : (
        <Box
          id="page container"
          height={"100%"}
          sx={{
            backgroundImage: {
              md: "none",
              lg: `url(${currentAgent?.background})`,
            },
            backgroundPosition: { md: "center", lg: "left" },
            backgroundRepeat: "no-repeat",
            backgroundColor: "hsla(0,0%,4%,0.3)",
            backgroundSize: { md: "100%", lg: "auto" },
          }}
        >
          <Box
            id="content container"
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
          >
            <Box
              id="row agent container"
              display="flex"
              flexDirection="row"
              sx={{ maxHeight: `calc(100% - 160px)` }}
              flexWrap="wrap"
            >
              <Box
                component="img"
                src={currentAgent?.image}
                alt={currentAgent?.name}
                sx={{
                  backgroundImage: {
                    xs: `url(${currentAgent?.background})`,
                    lg: "none",
                  },
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: { xs: "100%", lg: "auto" },

                  height: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />

              <Box minWidth="300px" maxWidth="100vw" id="skills container">
                <Typography variant="h1">Hola</Typography>
              </Box>
            </Box>

            {/* <Box>
              <CharacterSwiper
                agents={agents}
                setCurrentAgent={setcurrentAgent}
              />
            </Box> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};
