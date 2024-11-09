import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface UploaderProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  setImages: Dispatch<SetStateAction<string[]>>;
  images: string[];
}
