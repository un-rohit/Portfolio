import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import currencyConverter from "../../Assets/Projects/currency-converter.png";
import medicineRecord from "../../Assets/Projects/medicine-record.png";
import ticTacToe from "../../Assets/Projects/tic-tac-toe.png";
import incomeTaxIcon from "../../Assets/Projects/income-tax.png"; // <-- Add a custom icon/image for Income Tax

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={incomeTaxIcon} // <-- Use your custom icon here
              title="Income Tax Department Website"
              description="Improved website loading speed by 40% using optimized queries and caching techniques. Ensured seamless user experience across all devices with clear navigation, readable fonts, and assistive technologies, while adhering to WCAG compliance. Optimized pages for quick loading and implemented secure access measures. Enabled content accessibility in multiple languages for a diverse audience. Tech: HTML, CSS, JavaScript, Bootstrap, MySQL, PHP."
              ghLink="https://github.com/un-rohit/IncomeTaxDept"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={currencyConverter}
              title="Currency Converter App"
              description="Developed a real-time currency converter app for Android, integrating live exchange rates via API. Designed an intuitive and user-friendly UI to enhance user experience. Optimized app performance for smooth and responsive functionality across various devices. Tech: Android Studio, Kotlin, REST API, XML, Firebase."
              ghLink="https://github.com/un-rohit/currency-converter-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={medicineRecord}
              title="Medicine Record Management System"
              description="Developed a console-based application in C to manage medicine records efficiently. Implemented functionalities for adding, updating, searching, and deleting medicine data. Used file handling for persistent storage and structured data management. Designed an intuitive menu-driven interface for easy user interaction. Tech: C, File Handling, Data Structures, Command-Line Interface."
              ghLink="https://github.com/un-rohit/medicine-record-management"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ticTacToe}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe game with an interactive user interface and intelligent move logic. Implemented Minimax Algorithm for AI-based opponent moves. Designed an intuitive UI for a smooth user experience. Tech: C++ Programming Language, GUI framework (PyQt), Algorithmic logic."
              ghLink="https://github.com/un-rohit/tic-tac-toe"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
          <a
            href="https://github.com/un-rohit"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-colour nav-link"
            aria-label="Rohit Kumar's GitHub"
          >
            Rohit Kumar's GitHub
          </a>
          <a
            href="https://linkedin.com/in/unrohit"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-colour nav-link"
            aria-label="Rohit Kumar's LinkedIn"
            style={{ marginLeft: 24 }}
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/unrohitkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-colour nav-link"
            aria-label="Rohit Kumar's Twitter"
            style={{ marginLeft: 24 }}
          >
            Twitter
          </a>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
