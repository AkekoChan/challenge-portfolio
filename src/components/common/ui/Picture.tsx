import { PictureType } from "../../../types/Picture.types";

type PictureProps = PictureType;

const Picture = ({ srcImgs, alt, width, height, className }: PictureProps) => {
  return (
    <picture class="w-full">
      <source type="image/webp" srcSet={srcImgs[0]} sizes="100vw" />
      <source type="image/jpeg" srcSet={srcImgs[1]} sizes="100vw" />
      <img
        src={srcImgs[3]}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        class={`rounded-4xl object-cover w-full ${className || ""}`}
      />
    </picture>
  );
};

export default Picture;
