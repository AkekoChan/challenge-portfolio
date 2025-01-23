import Title from "./../common/ui/Title";
import Accordion from "./accordion/Accordion";

const Skills = () => {
  return (
    <section class="flex flex-col p-8 gap-6 items-start lg:px-24">
      <Title title="Compétences" subtitle="03." />
      <Accordion />
    </section>
  );
};

export default Skills;
