import { useState, ChangeEvent } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";

type ImageInputProps = {
  image: string | null;
  onChange: (image: File) => void;
};

export const ImageInput = ({ image, onChange }: ImageInputProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(image);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      setPreviewImage(URL.createObjectURL(image));
      onChange(image);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Input type="file" onChange={onInputChange} />
      {previewImage ? (
        <Image
          alt="the preview image"
          src={previewImage}
          width={30}
          height={30}
          className="aspect-square w-12 rounded-md bg-accent"
        />
      ) : null}
    </div>
  );
};
