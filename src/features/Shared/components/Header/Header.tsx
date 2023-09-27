import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const { container, logo } = styles;

export function Header() {
  return (
    <div className={container}>
      <h2 className={logo}>
        <Link to="/">
          <img
            loading="lazy"
            src="https://www.infakt.pl/wp-content-new/themes/infakt/assets/images/2020/logo-infakt.svg"
            width="146"
            height="38"
            alt="logo infakt"
          />
        </Link>
      </h2>
    </div>
  );
}
