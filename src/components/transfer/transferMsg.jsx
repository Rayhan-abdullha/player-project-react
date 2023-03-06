import React from "react";

const TransferMsg = ({ player }) => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "#ddd",
          padding: "20px",
          margin: "250px 0",
        }}
      >
        <h1>Transfer Successfully Done</h1>
        <h3>{player.name}</h3>
        <p>{player.desc}</p>
        <p>{player.watch}</p>
        <p>Msg: {player.msg}</p>
        <p>Price: {player.price}</p>
      </div>
    </div>
  );
};

export default TransferMsg;
