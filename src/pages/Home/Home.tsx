import styles from "./Home.module.css";
import { HomeContainer } from "../../features";

const { container } = styles;

export function Home() {
  return (
    <div className={container}>
        <HomeContainer />
    </div>
  );
}