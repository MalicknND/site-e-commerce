import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../product";

const Home = () => {
  return (
    <Container>
      <h1>Nouvelle Arrivage</h1>
      <Row>
        {products.map((p) => (
          <Col>{p.name}</Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
