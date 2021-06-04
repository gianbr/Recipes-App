import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  var d = new Date();
  var n = d.getHours();

  const greeting = n < 12 ? "morning" : n < 16 ? "afternoon" : "evening";
  const meal =
    n < 12 ? "breakfast" : n < 16 ? "lunch" : n < 20 ? "snack" : "dinner";

  return (
    <Container className="banner position-relative">
      <img
        alt="banner"
        src="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w"
      />
      <Container className="greeting pt-3 pb-3">
        <h3>Good {greeting}!</h3>
        <h4>Something smells delicious. Time for a yummy {meal}!</h4>
      </Container>
    </Container>
  );
};

export default Banner;
