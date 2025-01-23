import LinkSecondary from "../ui/LinkSecondary";

const FooterBottomNav = () => {
  const bottomLinks = [
    {
      href: "/legals",
      text: "Mentions légales",
    },

    {
      href: "/site-plan",
      text: " Plan du site",
    },
  ];

  return (
    <nav>
      <ul class="flex flex-col gap-2 items-center lg:flex-row lg:gap-6">
        {bottomLinks.map((link, index) => (
          <li key={index} class="flex">
            <LinkSecondary href={link.href}>{link.text}</LinkSecondary>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterBottomNav;
