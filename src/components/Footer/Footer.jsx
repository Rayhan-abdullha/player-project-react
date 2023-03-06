import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
const menu = [
  {
    text: "Contact Us",
    link: "/contact",
  },
  {
    text: "Terms of Service ",
    link: "/contact",
  },
  {
    text: "Privacy Policy ",
    link: "/contact",
  },
  {
    text: "Privacy Settings",
    link: "/contact",
  },
  {
    text: "Goal App",
    link: "/contact",
  },
  {
    text: "Goal Live",
    link: "/contact",
  },
];
const Footer = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h3 className={styles.title}>Goal</h3>
        <br />
        <hr />
        <br />
        <ul className={styles.ul}>
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link className={styles.menuList} to={item.link}>
                  {item.text}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
