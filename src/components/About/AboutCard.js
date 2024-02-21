import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Milka Fasika </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently a  software engineering student with a focus on Artificial Intelligence at Addis Ababa Institute of Technology (AAiT) , 
              Addis Ababa University.

            <br /> 
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "The joy of coding comes from the satisfaction of solving puzzles and creating something from nothing"{" "}
          </p>
          <footer className="blockquote-footer">Milka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
