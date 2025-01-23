import Title from "../../common/ui/Title";
import JourneyTimeline from "./JourneyTimeline";

const Journey = () => {
  return (
    <section class="flex flex-col p-8 gap-6 items-start lg:px-24">
      <Title title="Parcours" subtitle="04." />
      <JourneyTimeline />
    </section>
  );
};

export default Journey;
