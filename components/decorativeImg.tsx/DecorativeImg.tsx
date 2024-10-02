import Image from "next/image";

interface DecorativeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotation?: string;
}

export const DecorativeImage: React.FC<DecorativeImageProps> = ({
  src,
  alt,
  width,
  height,
  top,
  bottom,
  left,
  right,
  rotation,
}) => {
  return (
    <div
      className="absolute"
      style={{
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotation})`,
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
