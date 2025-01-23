type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div class="w-fit">
      <span class="text-2xl font-afacad text-light-brown-500">{subtitle}</span>
      <h2 class="text-5xl font-afacad">{title}</h2>
    </div>
  );
};

export default Title;
