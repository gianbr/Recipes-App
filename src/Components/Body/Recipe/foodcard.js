import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import RecipeModal from "./recipeModal";

const FoodCard = ({ recipe }) => {
  const { label, calories, image, totalTime, dietLabels } = recipe;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card className="foodcard" onClick={() => setOpenModal(true)}>
        {totalTime !== 0 ? (
          <span className="time">{totalTime} mins</span>
        ) : null}
        <Card.Img variant="top" src={image} alt={label}/>
        <Card.Body>
          <Row className="px-2">
            <Col sm={9} className="px-0 title">
              {label}
            </Col>
            <Col sm={3} className="px-0 cal ta-center">
              {Math.round(calories)} Cal
            </Col>
          </Row>
          <Row className="serving px-2 mt-2">
            Servings: {recipe.yield} Foodies
          </Row>
          {dietLabels.length > 0 ? (
            <Row className="cal px-2 mt-1">
              Diet Labels: {dietLabels.map((label) => label + ", ")}
            </Row>
          ) : null}
        </Card.Body>
      </Card>
      <RecipeModal open={openModal} setOpen={setOpenModal} data={recipe} />
    </>
  );
};

export default FoodCard;
