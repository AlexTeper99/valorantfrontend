import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {}

export const MainContent: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Typography variant="h1">Main Content</Typography>
    </Box>
  );
};

//   <Box
//           height={"100%"}
//           sx={{
//             backgroundImage: {
//               sm: "none",
//               md: `url(${currentAgent?.background})`,
//             },
//             backgroundPosition: { sm: "center", md: "left" },
//             backgroundRepeat: "no-repeat",
//             backgroundColor: "hsla(0,0%,4%,0.3)",
//             backgroundSize: { sm: "100%", md: "auto" },
//           }}
//         >
//           <Box display="flex" flexDirection="column" height="100%" width="100%">
//             <Box
//               display="flex"
//               flexGrow={1}
//               sx={{ height: `calc(100% - 160px)` }}
//             >
//               <Box
//                 component="img"
//                 src={currentAgent?.image}
//                 alt={currentAgent?.name}
//                 sx={{
//                   backgroundImage: {
//                     xs: `url(${currentAgent?.background})`,
//                     md: "none",
//                   },
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: { xs: "100%", md: "auto" },

//                   height: "100%",
//                   maxWidth: "100vw",
//                   objectFit: "contain",
//                 }}
//               />
//             </Box>
