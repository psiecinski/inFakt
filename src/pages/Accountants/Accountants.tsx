import { AccountantsContainer } from "../../features/";
import styles from "./Accountants.module.css";

const { container } = styles;

export function Accountants() {
  return (
    <div className={container}>
        <AccountantsContainer />
    </div>
  );
}