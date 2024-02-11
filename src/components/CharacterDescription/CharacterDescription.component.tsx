import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IAgent } from "../../types";
import { ColorsEnum } from "../../theme";
import { DefaultIcon } from "..";

interface Props {
  agent: IAgent;
}

export const CharacterDescription: React.FC<Props> = ({ agent }) => {
  const [skillSelected, setskillSelected] = useState<number>(-1);

  useEffect(() => {
    setskillSelected(-1);
  }, [agent]);

  return (
    <Stack
      justifyContent={{ xs: "center", md: "flex-start" }}
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      <Typography variant="subtitle1" mb={"-10px"}>
        {agent.rol}
      </Typography>
      <CardActionArea
        sx={{
          mt: "5px",
          textAlign: { xs: "center", md: "initial" },
        }}
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
              {skill.icon ? (
                <Box
                  key={i}
                  component="img"
                  src={skill.icon}
                  width={{ xs: "40px", md: "60px" }}
                  minWidth={{ xs: "40px", md: "60px" }}
                  sx={{ opacity: skillSelected === i ? 1 : 0.5 }}
                />
              ) : (
                <DefaultIcon
                  skillSelected={skillSelected}
                  i={i}
                  width={{ xs: "40px", md: "60px" }}
                  height={{ xs: "40px", md: "60px" }}
                />
              )}
            </CardActionArea>
          ))}
      </Stack>

      <Box my={"10px"} minHeight={{ xs: "250px", md: "none" }}>
        {agent && skillSelected === -1 ? (
          <Typography variant="body1" color={ColorsEnum.primary}>
            {agent.bio}
          </Typography>
        ) : (
          <Typography variant="body1" color={ColorsEnum.primary}>
            {agent.skills.at(skillSelected)
              ? agent.skills[skillSelected].description
              : "No description"}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
