import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useAgents } from "../../hooks";
import {
  CharacterSwiper,
  MainContent,
  ValorantLoadingLogo,
} from "../../components";
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
      sx={{
        overflowY: "auto",
        height: "100vh",
        background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
      }}
    >
      {isLoading ? (
        <Box sx={{ ...loadingStyleContainer }}>
          <ValorantLoadingLogo />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          height={"100%"}
          justifyContent="space-between"
        >
          <MainContent />
          <Box>
            <CharacterSwiper
              agents={agents}
              setCurrentAgent={setcurrentAgent}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
