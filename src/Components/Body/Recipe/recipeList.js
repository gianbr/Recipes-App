import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FoodCard from "./foodcard";

const RecipeList = ({ dataArray }) => {
  var [key, setKey] = useState(0);

  const keyHandler = (param) => {
    key = param + 1;
    return key;
  };

  useEffect(() => {
    setKey(key);
  }, [key]);

  return (
    <Container className="list px-0 mt-5 mb-5">
      {dataArray.map((obj) => (
        <FoodCard key={keyHandler(key)} recipe={obj.recipe} />
      ))}
    </Container>
  );
};

export default RecipeList;
