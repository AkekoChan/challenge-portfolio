import { useState } from "preact/hooks";
import { data } from "../../../data/AccordionData";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={item.slug}
          title={item.title}
          content={item.content}
          slug={item.slug}
          index={index}
          activeIndex={activeIndex}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
