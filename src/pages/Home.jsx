import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout/Layout";
import Header from "../components/header/Header";
import CardItem from "../components/card/CardItem";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <CardItem />
      </Layout>
    </>
  );
};

export default Home;
