import { ProductionType } from "../../../types/Production.types";
import LinkPrimary from "../../common/ui/LinkPrimary";
import Picture from "../../common/ui/Picture";

type productionProps = { production: ProductionType };

const ProductionCard = ({ production }: productionProps) => {
  return (
    <>
      <Picture {...production.img} />
      <div class="flex flex-col items-center gap-4">
        <h3 class="font-afacad text-light-brown-500 font-semibold text-4xl self-start">
          {production.title}
        </h3>
        <p class="text-lg font-lexend-exa">{production.about}</p>
        <LinkPrimary href={production.href}>Découvrir le projet</LinkPrimary>
      </div>
    </>
  );
};

export default ProductionCard;
