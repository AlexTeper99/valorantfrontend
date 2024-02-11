import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { IAgent } from "../../types";
import { ColorsEnum } from "../../theme";

interface Props {
  agent: IAgent;
}

export const CharacterDescription: React.FC<Props> = ({ agent }) => {
  const [skillSelected, setskillSelected] = useState<number>(-1);

  return (
    <Stack
      justifyContent={{ xs: "center", md: "flex-start" }}
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      <Typography variant="subtitle1" mb={"-10px"}>
        {agent.rol}
      </Typography>
      <CardActionArea
        sx={{ mt: "5px", textAlign: { xs: "center", md: "initial" } }}
      >
        <Typography
          variant="h1"
          mb={"-10px"}
          onClick={() => setskillSelected(-1)}
        >
          {agent.name}
        </Typography>
      </CardActionArea>
      <Stack direction="row" spacing={2} my="20px">
        {agent &&
          agent.skills.map((skill, i) => (
            <CardActionArea
              sx={{
                border: "1px solid white",
                backgroundColor: "gray",
                opacity: skillSelected === i ? 1 : 0.5,
                padding: "5px",
              }}
              key={i}
              onClick={() => setskillSelected(i)}
            >
              <Box
                key={i}
                component="img"
                src={skill.icon}
                width="40px"
                sx={{ opacity: skillSelected === i ? 1 : 0.5 }}
              />
            </CardActionArea>
          ))}
      </Stack>

      {agent && agent.skills.length > 0 && skillSelected === -1 ? (
        <Typography variant="body1" color={ColorsEnum.primary}>
          {agent.bio}
        </Typography>
      ) : (
        <Typography variant="body1" color={ColorsEnum.primary}>
          {agent.skills[skillSelected].description}
        </Typography>
      )}

      {/* <Typography variant="body2" color={ColorsEnum.primary}>
        {agent.bio}
      </Typography> */}
      {/* <Typography variant="h2">{agent.rol}</Typography> */}
    </Stack>
  );
};
