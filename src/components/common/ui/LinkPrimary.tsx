import React from "preact/compat";

interface LinkPrimaryProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const LinkPrimary = ({ href, ...props }: LinkPrimaryProps) => {
  return (
    <a
      href={href}
      class="px-12 py-4 bg-light-brown-500 rounded-4xl text-lg font-semibold font-lexend-exa text-center relative before:content-[''] before:bg-link-pattern before:absolute before:size-[500%] before:-top-[200%] before:-left-[200%] before:origin-center before:-z-10 overflow-hidden hover:bg-transparent focus-within:bg-transparent before:animate-rotateIt before:opacity-80 transition-all duration-300"
      {...props}
    />
  );
};

export default LinkPrimary;
