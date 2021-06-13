import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import Header from "./header";

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Nav />
      <Header title={title} subtitle={subtitle}/>
      <main>{children}</main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;