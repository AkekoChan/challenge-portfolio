import { ArrowRight, Eye, PenTool, Server } from "lucide-preact";
import { useRef } from "preact/hooks";

type AccordionItemProps = {
  title: string;
  content: string;
  slug: string;
  isOpen: boolean;
  index: number;
  activeIndex: number | null;
  onClick: () => void;
};

const AccordionItem = ({
  title,
  content,
  slug,
  index,
  activeIndex,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement | null>(null);
  const hasBorder = index !== activeIndex! - 1 && index !== activeIndex;

  return (
    <div class={`overflow-hidden ${hasBorder ? "border-b-[0.0625rem]" : ""}`}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${slug}`}
        class={`flex justify-between items-center px-4 py-8 w-full gap-4 ${
          isOpen ? "bg-dark-200 rounded-t-4xl" : ""
        }`}
      >
        <div class="flex items-center gap-4 flex-wrap">
          {/* Faire l'icone à partir du slug */}
          {slug == "front" ? (
            <Eye size={48} class="text-light-brown-500" />
          ) : slug == "back" ? (
            <Server size={48} class="text-light-brown-500" />
          ) : (
            <PenTool size={48} class="text-light-brown-500" />
          )}

          <p class="font-lexend-exa font-semibold text-xl text-start">
            {title}
          </p>
        </div>
        <ArrowRight
          class={`${
            isOpen ? "-rotate-45" : ""
          } bg-light-brown-500 rounded-full px-2 py-1 transition-all duration-300 max-w-12 w-full h-12`}
        />
      </button>
      <div
        id={`accordion-content-${slug}`}
        role="region"
        ref={contentHeight}
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
        class={`transition-all duration-300`}
      >
        <p
          class={`pb-8 px-4 font-lexend-exa text-lg ${
            isOpen ? "bg-dark-200 rounded-b-4xl" : ""
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
