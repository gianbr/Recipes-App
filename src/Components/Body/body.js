import React, { useState } from "react";
import { Container, Toast } from "react-bootstrap";
import Search from "./search";
import RecipeList from "./Recipe/recipeList";
import Banner from "./banner";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const APP_ID = "a0591608";
const APP_KEY = "eb5d564a59fae7f7babd6fc3d738503e";

const Body = () => {
  const [isLoading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [toast, setToast] = useState(false);

  const url = `https://api.edamam.com/search?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
  async function request() {
    try {
      const response = await fetch(url);
      const jsonObj = await response.json();
      setData(jsonObj.hits);
      setLoading(false);
    } catch {
      setLoading(false);
      setToast(true);
    }
  }

  return (
    <Container fluid>
      <Search
        isLoading={isLoading}
        setLoading={setLoading}
        setKeyword={setKeyword}
        request={request}
      />

      <Banner />
      <RecipeList dataArray={data} />
      <Backdrop className="loader" open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Toast
        className="toast"
        show={toast}
        onClose={() => setToast(false)}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <ErrorOutlineIcon />
          <strong className="mr-auto">Server On Heavy Load</strong>
        </Toast.Header>
        <Toast.Body>
          The server is running on heavy load. Please Try again after 1 min
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default Body;
