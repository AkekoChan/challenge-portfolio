type JourneyTimelineItemProps = {
  date: string;
  content: string;
  isOdd: boolean;
  index: number;
};

// https://codepen.io/Mritunjay-Tiwari-the-solid/pen/gbYvpga ==> Voir pour animation

const JourneyTimelineItem = ({
  date,
  content,
  isOdd,
  index,
}: JourneyTimelineItemProps) => {
  return (
    <div
      key={index}
      class={`flex items-center gap-6 w-full lg:w-1/2 relative px-4 py-8 opacity-0 animate-fadeUp dela ${
        isOdd ? "lg:left-1/2" : "lg:left-0"
      } ${!isOdd ? "lg:flex-row-reverse" : ""}`}
      style={`animation-delay: ${index / 2}s`}
    >
      <span
        aria-hidden="true"
        class={`block max-w-6 w-full h-6 bg-white rounded-full  ${
          !isOdd ? "lg:mr-6" : "lg:ml-6"
        }`}
      ></span>
      <div class="flex flex-col gap-4 lg:gap-6">
        <span class="text-3xl lg:text-5xl font-afacad font-semibold text-light-brown-500">
          {date}
        </span>
        <p class="text-start text-lg font-lexend-exa">{content}</p>
      </div>
    </div>
  );
};

export default JourneyTimelineItem;
