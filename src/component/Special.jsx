import React from "react";
import './Special.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Special() {
    return (
      <>
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>
          <button id="button">Online Menu</button>
        </div>
      </div>
        <div className="cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/icons_assets/restauranfood.jpg'} style={{ width: '250px', height: '300px', borderRadius: '10px'}} />
            <Card.Body>
              <Card.Title>Greek Salad</Card.Title>
              <Card.Text>
                The famous greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </Card.Text>
              <Button variant="primary">Order Delivery </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/photos/bruchetta.svg`} />
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
                Our Bruschetta is made from homemade grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. Topped
                with fresh vegetables.
              </Card.Text>
              <Button variant="primary">Order Delivery </Button>
            </Card.Body>
          </Card>
  
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/photos/dessert.jpg`} />
            <Card.Body>
              <Card.Title>Lemon Cake</Card.Title>
              <Card.Text>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined. <i class="fa-regular fa-moped"></i>
              </Card.Text>
              <Button variant="primary">Order Delivery </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
}

export default Special;
