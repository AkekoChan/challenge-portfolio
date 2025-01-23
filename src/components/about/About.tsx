import LinkPrimary from "../common/ui/LinkPrimary";
import Title from "../common/ui/Title";
import Slider from "./slider/Slider";

const About = () => {
  return (
    <section class="flex flex-col p-8 gap-6 items-start overflow-hidden lg:overflow-visible lg:px-24 mt-[11rem] lg:mt-[9.625rem]">
      <Title title="A propos" subtitle="01." />
      <div class="flex gap-8 flex-col lg:gap-12 lg:flex-row">
        <div class="flex flex-col items-center lg:items-start lg:max-w-3xl gap-8 w-full">
          <p class="font-lexend-exa text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <LinkPrimary href="" download>
            Mon CV
          </LinkPrimary>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default About;
