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
          <Card className="special-card" style={{ width: "16rem", height:"30rem", background: '#EDEFEE', overflow: 'hidden' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photos/salad.jpg'} className="center-image" style={{ width: '250px', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', margin: 'auto' }} />
            <Card.Body className="card-body">
              <Card.Title>Greek Salad</Card.Title>
              <Card.Text>
                The famous greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </Card.Text>
              <Button variant="primary">Order Delivery </Button>
            </Card.Body>
          </Card>
          <Card className="special-card" style={{ width: "16rem",height:"30rem",  background: '#EDEFEE', overflow: 'hidden' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photos/bruchetta.svg'} className="center-image" style={{ width: '250px', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', margin: 'auto' }} />
            <Card.Body className="card-body">
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
                Our Bruschetta is made from homemade grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil.
              </Card.Text>
              <Button variant="primary">Order Delivery </Button>
            </Card.Body>
          </Card>
          <Card className="special-card" style={{ width: "16rem",height:"30rem", background: '#EDEFEE', overflow: 'hidden' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photos/dessert.jpg'} className="center-image" style={{ width: '250px', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', margin: 'auto' }} />
            <Card.Body className="card-body">
              <Card.Title>Lemon Cake</Card.Title>
              <Card.Text>
                This comes straight from grandma’s recipe book, every last
                ingre dient has been sourced and is as authentic as can be
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
