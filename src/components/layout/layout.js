import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Nav />
      <Header title={title} subtitle={subtitle}/>
      <main>{children}</main>
      <Footer />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;