import { useState } from "preact/hooks";
import { ProductionType } from "../../../types/Production.types";
import ProductionCard from "./ProductionCard";
import ProductionSelect from "./ProductionSelect";

type ProductionsProps = {
  productions: ProductionType[];
};

const ProductionShow = ({ productions }: ProductionsProps) => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleSelectProduction = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCurrentProject(Number(event.currentTarget.dataset.project));
  };

  return (
    <div class="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:justify-center">
      <div class="w-full lg:max-w-3xl">
        <ul class="flex flex-col">
          {productions.map((production, index) => (
            <li>
              <ProductionSelect
                index={index}
                currentProject={currentProject}
                handleSelectProduction={handleSelectProduction}
                production={production}
              />
            </li>
          ))}
        </ul>
      </div>
      <div class="flex flex-col gap-4 items-center lg:items-start">
        {productions[currentProject] && (
          <ProductionCard production={productions[currentProject]} />
        )}
      </div>
    </div>
  );
};

export default ProductionShow;
