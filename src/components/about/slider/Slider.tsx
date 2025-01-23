import { Swiper, SwiperSlide } from "swiper/react";
import Picture from "../../common/ui/Picture";

import "swiper/css";
import { picture } from "../../../data/PictureData";
import SliderNavigation from "./SliderNavigation";

const Slider = () => {
  const img = picture;

  return (
    <Swiper slidesPerView={1} spaceBetween={32} keyboard={false}>
      <SwiperSlide>
        <Picture {...img} />
      </SwiperSlide>
      <SwiperSlide>
        <Picture {...img} />
      </SwiperSlide>
      <SwiperSlide>
        <Picture {...img} />
      </SwiperSlide>
      <SliderNavigation />
    </Swiper>
  );
};

export default Slider;
