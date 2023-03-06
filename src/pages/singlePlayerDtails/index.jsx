import React from "react";
import { useState } from "react";
import TransferMsg from "../../components/transfer/transferMsg";
import Layout from "../../layout/Layout";
import SingleplayerDtls from "./SingleplayerDtls";

const TransferMain = () => {
  const [info, setInfo] = useState({});
  const playerInfo = (info) => {
    setInfo(info);
  };
  return (
    <Layout>
      {Object.keys(info).length !== 0 ? (
        <TransferMsg player={info} />
      ) : (
        <SingleplayerDtls playerInfo={playerInfo} />
      )}
    </Layout>
  );
};

export default TransferMain;
