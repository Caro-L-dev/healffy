import { FormEventHandler } from "react";

type FirebaseImageUploadProps = {
  image: string;
  onChange: FormEventHandler;
};

export const FirebaseImageUpload = ({
  image,
  onChange,
}: FirebaseImageUploadProps) => {
  return <div image={image} onChange={onChange}></div>;
};
