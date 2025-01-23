import { ArrowUpRight } from "lucide-preact";
import Title from "../ui/Title";
import FooterBottomNav from "./FooterBottomNav";
import FooterIconsNav from "./FooterIconsNav";

const Footer = ({ subtitle }: { subtitle: string }) => {
  return (
    <footer class="px-8 py-8 lg:px-24">
      <div class="flex flex-col gap-6 bg-dark-200 p-8 rounded-4xl">
        <Title title="Contact" subtitle={subtitle} />

        <div class="flex flex-col gap-8 pb-8 border-b-[.0625rem] lg:flex-row lg:items-end">
          <a
            href=""
            class="text-[2rem] leading-tight font-semibold flex items-end gap-2 lg:text-6xl font-afacad lg:max-w-3xl"
          >
            <span>
              Mon <span class="text-light-brown-500">profil</span> vous
              interesse ?{" "}
              <span class="text-light-brown-500">Contactez-moi</span>{" "}
              directement.
            </span>
            <ArrowUpRight class="bg-light-brown-500 rounded-full p-2 w-full h-full max-h-12 max-w-12 lg:max-h-16 lg:max-w-16" />
          </a>
          <FooterIconsNav />
        </div>

        <div class="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
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
          <p class="font-lexend-exa text-xs text-center">
            © Lucas Martin, 2024 - Design by{" "}
            <a
              href="https://martintheo.fr/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Théo
            </a>
          </p>
          <FooterBottomNav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
