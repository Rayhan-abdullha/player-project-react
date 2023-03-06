import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const menu = [
  { text: "Home", link: "/" },
  { text: "News", link: "/news" },
  { text: "Upcoming Match", link: "/upcoming_match" },
  { text: "About Us", link: "/about" },
];

const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.wrapper}>
        <ul className={styles.ul}>
          {menu.map((item, index) => (
            <React.Fragment key={item.text}>
              <li key={index}>
                <Link className={styles.menuList} to={item.link}>
                  {item.text}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
