import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

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
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "10px",
                }}
              >
                <img
                  src={agent.displayIcon}
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
