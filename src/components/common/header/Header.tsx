import { useEffect, useState } from "preact/hooks";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { HeaderLinkType } from "../../../types/Header.types";
import LinkSecondary from "./../ui/LinkSecondary";

interface HeaderProps {
  links: HeaderLinkType[];
}

const Header = ({ links }: HeaderProps) => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const html = document.documentElement;

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);

    isOpen
      ? html.classList.remove("overflow-hidden")
      : html.classList.add("overflow-hidden");
  };

  useEffect(() => {
    if (width && width >= 1024) {
      setIsOpen(false);
      html.classList.remove("overflow-hidden");
    }
  }, [width]);

  useEffect(() => {
    html.classList.remove("overflow-hidden");
  }, [window.location.pathname]);

  return (
    <header class="fixed top-0 w-full z-50 px-24 py-8 pe-0 flex items-center">
      <div class="flex items-center ms-auto py-8 px-6 bg-light-brown-500 rounded-s-3xl gap-8 lg:bg-transparent lg:ms-0 lg:p-0">
        <a href="/">
          <svg
            width="102"
            height="80"
            viewBox="0 0 102 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="size-10 lg:size-16"
          >
            <path
              d="M0 80V0H14.8444V66.9333H39.8222V80H0Z"
              fill="currentColor"
            />
            <path
              d="M26.3099 62L26.3099 0L64.0877 46.7097L101.243 0V80H87.1099V54.3656C87.1099 51.8996 87.1395 49.147 87.1988 46.1075C87.2581 43.0107 87.5247 39.5125 87.9988 35.6129C86.1618 38.595 84.384 41.2043 82.6655 43.4409C80.9469 45.6774 79.3766 47.7419 77.9544 49.6344L63.821 68.3011L49.1544 49.6344C47.7321 47.8566 46.1025 45.7634 44.2655 43.3548C42.4877 40.8889 40.7099 38.2222 38.9321 35.3548C39.4062 39.4265 39.6729 42.9821 39.7321 46.0215C39.7914 49.0609 39.821 51.8423 39.821 54.3656V56L39.821 62H26.3099Z"
              fill="currentColor"
            />
          </svg>
          <span class="sr-only">Aller à l'accueil</span>
        </a>
        <button
          type="button"
          class="flex flex-col gap-2 items-center lg:hidden"
          onClick={handleToggleMenu}
        >
          <div class="relative w-12 h-4">
            <span
              class={`absolute top-0 w-full left-0 h-0.5 bg-white ${
                isOpen ? "rotate-45 top-0.5" : ""
              } transition-all duration-300`}
            ></span>
            <span
              class={`absolute bottom-0 w-full left-0 h-0.5 bg-white ${
                isOpen ? "-rotate-45 bottom-3" : ""
              } transition-all duration-300`}
            ></span>
          </div>
          <span class="uppercase font-lexend-exa font-semibold">Menu</span>
        </button>
      </div>

      <nav
        class={`lg:ms-auto lg:px-6 lg:py-8 lg:max-w-2xl lg:w-full rounded-s-3xl fixed right-0 top-[9.25rem] bg-light-brown-500 px-12 py-16 lg:static opacity-0 lg:opacity-100 lg:translate-x-0 transition-all duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul class="flex gap-8 lg:justify-end text-white flex-col lg:flex-row">
          {links.map((link, index) => (
            <li key={index} class="flex">
              <LinkSecondary
                href={link.path}
                tabIndex={width && width >= 1024 ? 0 : isOpen ? 0 : -1}
              >
                {link.name}
              </LinkSecondary>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
