import React, { useState } from "react";
import { players } from "./../../db/player";
import CardList from "./CardList";
import styles from "./card.module.css";

const CardItem = () => {
  const [items, setItems] = useState(players);
  return (
    <div className={`container ${styles.card}`}>
      {items.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardItem;
