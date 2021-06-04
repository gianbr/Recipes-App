import React from "react";
import Modal from "@material-ui/core/Modal";
import { Row, Container, Col, Card } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonIcon from "@material-ui/icons/Person";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const RecipeModal = ({ open, setOpen, data }) => {
  const {
    label,
    calories,
    image,
    totalTime,
    dietLabels,
    healthLabels,
    ingredients,
    url,
  } = data;
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container className="recipe-modal">
      <Row>
        <Col className="px-0 label">{label}</Col>
        <div>
          <CloseIcon className="svg pointer" onClick={handleClose} />
        </div>
      </Row>
      <Row className="mt-4 row-to-column">
        <Col className="m-auto">
          <Row>
            {dietLabels.map((p) => (
              <span className="time position-static mr-2 bgs-blue">{p}</span>
            ))}
          </Row>
          <Row>
            {healthLabels.map((p) => (
              <span className="time position-static mr-2 mt-2">{p}</span>
            ))}
          </Row>
          <Row className="mt-3">
            <span className="serving mr-2">
              <PersonIcon className="svg ml-2" /> {data.yield} Foodies
            </span>
            <span className="serving mr-2">
              <WhatshotIcon className="svg ml-2" />
              {Math.round(calories)} Cal
            </span>
            {totalTime ? (
              <span className="serving">
                <AccessTimeIcon className="svg ml-2" />
                {totalTime} mins
              </span>
            ) : null}
          </Row>
        </Col>
        <Col className="p-0">
          <img className="img-modal" src={image} alt={label}/>
        </Col>
      </Row>
      <Row className="ing mt-4 mb-2">Ingredients</Row>
      <Row className="ing-container">
        {ingredients.map((ing) => (
          <Col>
            <Card className="ing-card">
              <Card.Img
                variant="top"
                src={ing.image}
                height="150px"
                className="img-fit"
                alt={ing.text}
              />
              <Card.Body className="ing-body">{ing.text}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <a href={url} className="link" target="_blank" rel="noopener noreferrer">
          See Complete Recipe here
        </a>
      </Row>
    </Container>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{body}</Fade>
    </Modal>
  );
};

export default RecipeModal;
