import Title from "../../common/ui/Title";
import HobbiesShow from "./HobbiesShow";

const Hoobies = () => {
  return (
    <section class="flex flex-col p-8 gap-6 items-start lg:px-24">
      <Title title="Passions" subtitle="02." />
      <HobbiesShow />
    </section>
  );
};

export default Hoobies;
