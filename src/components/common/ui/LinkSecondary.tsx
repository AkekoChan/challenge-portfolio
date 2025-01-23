interface LinkSecondaryProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const LinkSecondary = ({ href, ...props }: LinkSecondaryProps) => {
  return (
    <a
      href={href}
      class="uppercase font-lexend-exa font-semibold tracking-wide after:content-[''] after:w-0 after:h-0.5 after:bg-white after:block hover:after:w-full focus-within:after:w-full after:transition-all after:duration-300"
      {...props}
    />
  );
};

export default LinkSecondary;
