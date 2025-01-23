import { ArrowRight } from "lucide-preact";
import { ProductionType } from "../../../types/Production.types";

type ProductionSelectProps = {
  index: number;
  currentProject: number;
  handleSelectProduction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  production: ProductionType;
};

const ProductionSelect = ({
  index,
  currentProject,
  handleSelectProduction,
  production,
}: ProductionSelectProps) => {
  return (
    <button
      key={index}
      type="button"
      class={`font-lexend-exa flex gap-8 py-8 px-4 w-full transition-background duration-300 ${
        index === currentProject ? "border-none bg-dark-200 rounded-4xl" : ""
      } ${
        index !== currentProject - 1 && index !== currentProject
          ? "border-b-[.0625rem]"
          : ""
      }`}
      data-project={index}
      onClick={handleSelectProduction}
    >
      <div class="flex flex-col">
        <span class="text-xl text-start">{production.date}</span>
        <p class="text-start">{production.title}</p>
      </div>
      <ArrowRight
        size={48}
        class={`bg-light-brown-500 rounded-full px-2 py-1 ml-auto transition-all duration-300 ${
          index === currentProject ? "-rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default ProductionSelect;
