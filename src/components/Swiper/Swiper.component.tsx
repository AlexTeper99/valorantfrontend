import React, { Dispatch, SetStateAction } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { IAgent } from "../../types";
import { Box } from "@mui/material";
import { ColorsEnum } from "../../theme/theme";

type Props = {
  agents: IAgent[];
  setCurrentAgent: Dispatch<SetStateAction<IAgent | undefined>>;
};

export const CharacterSwiper: React.FC<Props> = ({
  agents,
  setCurrentAgent,
}) => {
  return (
    <>
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentAgent(agents[swiper.activeIndex]);
        }}
        // loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: -50,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {agents.map((agent) => (
          <SwiperSlide key={agent.name}>
            <Box
              sx={{
                border: `3px solid white`,
              }}
            >
              <img src={agent.displayIcon} style={{ overflow: "hidden" }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
