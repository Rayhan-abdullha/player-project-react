import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
