import { ArrowLeft, ArrowRight } from "lucide-preact";

type SliderNavigationButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
  direction: string;
  label: string;
};

const SliderNavigationButton = ({
  onClick,
  isDisabled,
  direction,
  label,
}: SliderNavigationButtonProps) => {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      class="text-white"
      tabIndex={isDisabled ? -1 : 0}
    >
      {isPrev ? (
        <ArrowLeft
          size={48}
          class={`bg-light-brown-500 rounded-full px-2 py-1 transition-all duration-300 ${
            isDisabled ? "!bg-dark-200" : ""
          }`}
        />
      ) : (
        <ArrowRight
          size={48}
          class={`bg-light-brown-500 rounded-full px-2 py-1 transition-all duration-300 ${
            isDisabled ? "!bg-dark-200" : ""
          }`}
        />
      )}

      <span class="sr-only">{label}</span>
    </button>
  );
};

export default SliderNavigationButton;
