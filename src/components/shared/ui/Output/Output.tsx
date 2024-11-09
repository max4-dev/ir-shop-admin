import { useInput } from "react-admin";

import { OutputProps } from "./Output.props";
import styles from "./Output.module.scss";

export const Output = ({ source, label, value }: OutputProps) => {
  const { field, fieldState } = useInput({ source });
  return (
    <div className={styles.output}>
      {label}:<span {...field}>{JSON.stringify(value)}</span>
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
};
