import { Codepen, Github, Linkedin } from "lucide-preact";

const FooterIconsNav = () => {
  return (
    <nav class="lg:ml-auto">
      <ul class="text-light-brown-500 flex gap-6 justify-center">
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <Linkedin
              size={48}
              class="group-hover:text-white group-focus-within:text-white transition-all duration-300"
            />
            <span class="sr-only">Mon LikedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <Github
              size={48}
              class="group-hover:text-white group-focus-within:text-white transition-all duration-300"
            />
            <span class="sr-only">Mon GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <Codepen
              size={48}
              class="group-hover:text-white group-focus-within:text-white transition-all duration-300"
            />
            <span class="sr-only">Mon Codepen</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterIconsNav;
