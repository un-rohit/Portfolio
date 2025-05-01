import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Kumar</span> from 
            <span className="purple"> Jamshedpur, Jharkhand, India.</span>
            <br />
            I am currently pursuing Computer Science and Engineering at Lovely Professional University, Punjab.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Work and Outreach Programs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
