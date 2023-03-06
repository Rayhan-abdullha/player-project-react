import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { useNavigate, useParams } from "react-router-dom";
const CardList = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.singlePlayer}>
      <img
        onClick={() => navigate(`player/${item.id}`)}
        className={styles.playerImg}
        src={item.img}
        width={200}
        alt="notfound"
      />
      <button
        onClick={() => navigate(`player/${item.id}`)}
        style={{ marginTop: "20px", padding: "5px 10px", cursor: "pointer" }}
      >
        Transfer
      </button>
      <h3>{item.text}</h3>
      <div style={{ display: "flex", gap: "50px", marginTop: "20px" }}>
        <p>Watch: {item.watch}</p>
        <p>Msg: {item.msg}</p>
      </div>
    </div>
  );
};

CardList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    watch: PropTypes.string,
    msg: PropTypes.string,
  }).isRequired,
};

export default CardList;
