import "./Player.css";
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="Player">
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={image} alt={name} style={{width: 250, height: 200, borderRadius: 10}} />
      <Card.Body>
        <Card.Title style={{fontSize: "25px", paddingTop: "10px", }}>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

// Define default props (you can adjust these as needed)
Player.defaultProps = {
  name: "Player Name",
  team: "Team",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  image: "default-image-url.jpg",
};

export default Player;
