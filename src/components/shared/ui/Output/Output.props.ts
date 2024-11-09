import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export interface OutputProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  source: string;
  label: string;
  value: string[];
}
