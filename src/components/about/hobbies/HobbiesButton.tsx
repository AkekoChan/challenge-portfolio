import { ArrowUpRight } from "lucide-preact";

type HobbiesButtonProps = {
  content: string;
  currentHobby: number;
  index: number;
  handleSelectHobby: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const HobbiesButton = ({
  content,
  currentHobby,
  handleSelectHobby,
  index,
}: HobbiesButtonProps) => {
  return (
    <button
      class={`flex items-center gap-1 px-12 py-4 bg-light-brown-500 rounded-4xl text-lg font-semibold font-lexend-exa text-center relative before:content-[''] before:bg-link-pattern before:absolute before:size-[500%] before:-top-[200%] before:-left-[200%] before:origin-center before:-z-10 overflow-hidden hover:!bg-transparent focus-within:!bg-transparent before:animate-rotateIt before:opacity-80 transition-all duration-300 ${
        index === currentHobby ? "!bg-dark-200" : ""
      }`}
      data-current={index}
      onClick={handleSelectHobby}
    >
      {content}
      <ArrowUpRight />
    </button>
  );
};

export default HobbiesButton;
