import styles from "./Input.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export function Input({ placeholder }: Props) {
  return <input placeholder={placeholder} className={styles.input}></input>;
}
