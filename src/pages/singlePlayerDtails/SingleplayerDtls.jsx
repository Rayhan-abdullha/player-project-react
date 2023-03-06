import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { players } from "../../db/player";
import styles from "./singlePlayer.module.css";

import TransferForm from "./TransferForm";

const SingleplayerDtls = ({ playerInfo }) => {
  let playerId = useParams();
  playerId = parseInt(playerId.playerId);
  const player = players?.find((item) => item.id === playerId);

  const transferFormData = (data) => {
    playerInfo(data);
  };

  return (
    <div className="playerInfo container">
      <div className={styles.wrapper}>
        <div className={styles.playerImg}>
          <img style={{ width: "100%" }} src={player.img} alt="notfound" />
        </div>
        <div>
          <h3>{player.name}</h3>
          <p>{player.desc}</p>
          <p>{player.watch}</p>
          <p>{player.msg}</p>
          <TransferForm player={player} transferFormData={transferFormData} />
        </div>
      </div>
    </div>
  );
};

export default SingleplayerDtls;
