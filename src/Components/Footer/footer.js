import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="px-0 footer">
      <div className="text mb-2">
        Made by Gianluca Brunner
      </div>
      <div id="edamam-badge" data-color="badge"></div>
    </Container>
  );
};

export default Footer;
