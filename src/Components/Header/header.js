import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  return (
    <Container className="header">
      <Row className="header-row">
        <Col className="logo pl-0">Recipes App</Col>
        <a
          href="https://github.com/gianbr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="logo" />
        </a>
      </Row>
    </Container>
  );
};

export default Header;
