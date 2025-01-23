import { data } from "../../../data/JourneyData";
import { isOdd } from "../../../utils/functions";
import JourneyTimelineItem from "./JourneyTimelineItem";

const JourneyTimeline = () => {
  return (
    <div class="w-full relative man-w-full after:absolute after:content-[''] after:w-[.375rem] after:h-full after:bg-white after:top-0 after:lg:left-1/2 after:left-0 z-[-1] after:animate-moveLine">
      {data.map((item, index) => (
        <JourneyTimelineItem
          date={item.date}
          content={item.content}
          isOdd={isOdd(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default JourneyTimeline;
