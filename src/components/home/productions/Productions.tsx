import { ProductionType } from "../../../types/Production.types";
import Title from "../../common/ui/Title";
import ProductionShow from "./ProductionShow";

const Productions = () => {
  const productionData: ProductionType[] = [
    {
      date: "2024",
      title: "Develop mood boards",
      href: "/mood-boards",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: {
        alt: "Une image placeholder",
        srcImgs: [
          "/images/a__Ag4PRy1-400.webp 400w, /images/a__Ag4PRy1-800.webp 800w",
          "/images/a__Ag4PRy1-400.jpeg 400w, /images/a__Ag4PRy1-800.jpeg 800w",
          "/images/a__Ag4PRy1-800.webp",
        ],
        width: "800",
        height: "621",
        className: "lg:h-72",
      },
    },
    {
      date: "2024",
      title: "Design prototypes",
      href: "/prototypes",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: {
        alt: "Une image placeholder",
        srcImgs: [
          "/images/a__Ag4PRy1-400.webp 400w, /images/a__Ag4PRy1-800.webp 800w",
          "/images/a__Ag4PRy1-400.jpeg 400w, /images/a__Ag4PRy1-800.jpeg 800w",
          "/images/a__Ag4PRy1-800.webp",
        ],
        width: "800",
        height: "621",
        className: "lg:h-72",
      },
    },
    {
      date: "2024",
      title: "Optimize for devices",
      href: "/devices",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: {
        alt: "Une image placeholder",
        srcImgs: [
          "/images/a__Ag4PRy1-400.webp 400w, /images/a__Ag4PRy1-800.webp 800w",
          "/images/a__Ag4PRy1-400.jpeg 400w, /images/a__Ag4PRy1-800.jpeg 800w",
          "/images/a__Ag4PRy1-800.webp",
        ],
        width: "800",
        height: "621",
        className: "lg:h-72",
      },
    },
  ];

  return (
    <section class="flex flex-col p-8 gap-8 items-start overflow-hidden lg:overflow-visible lg:flex-col lg:px-24 lg:gap-12">
      <Title title="Productions" subtitle="01." />
      <ProductionShow productions={productionData} />
    </section>
  );
};

export default Productions;
