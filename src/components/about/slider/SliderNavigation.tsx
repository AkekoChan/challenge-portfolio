import { useEffect, useState } from "preact/hooks";
import { useSwiper } from "swiper/react";
import SliderNavigationButton from "./SliderNavigationButton";

const SliderNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const updateStates = () => {
      setIsStart(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateStates);

    return () => {
      swiper.off("slideChange", updateStates);
    };
  }, [swiper]);

  return (
    <ul class="flex gap-8">
      <li>
        <SliderNavigationButton
          onClick={() => swiper.slidePrev()}
          isDisabled={isStart}
          direction="prev"
          label="Image précédante"
        />
      </li>
      <li>
        <SliderNavigationButton
          onClick={() => swiper.slideNext()}
          isDisabled={isEnd}
          direction="next"
          label="Image suivante"
        />
      </li>
    </ul>
  );
};

export default SliderNavigation;
