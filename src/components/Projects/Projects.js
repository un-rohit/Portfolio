import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import currencyConverter from "../../Assets/Projects/currency-converter.png";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink }) => (
  <div style={{ background: "#222", borderRadius: 8, padding: 16, margin: 8, color: "#fff" }}>
    <img src={imgPath} alt={title} style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div style={{ marginTop: 12 }}>
      {ghLink && (
        <a
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#a259ff",
            marginRight: 16,
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          GitHub
        </a>
      )}
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#4ecdc4",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Demo
        </a>
      )}
    </div>
  </div>
);

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
            <ProjectCard
              imgPath={currencyConverter}
              title="Income Tax Department Website"
              description="Improved website loading speed by 40% using optimized queries and caching techniques. Ensured seamless user experience across all devices with clear navigation, readable fonts, and assistive technologies, while adhering to WCAG compliance. Optimized pages for quick loading and implemented secure access measures. Enabled content accessibility in multiple languages for a diverse audience. Tech: HTML, CSS, JavaScript, Bootstrap, MySQL, PHP."
              ghLink="https://github.com/un-rohit/IncomeTaxDept"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyConverter}
              title="Currency Converter App"
              description="Developed a real-time currency converter app for Android, integrating live exchange rates via API. Designed an intuitive and user-friendly UI to enhance user experience. Optimized app performance for smooth and responsive functionality across various devices. Tech: Android Studio, Kotlin, REST API, XML, Firebase."
              ghLink="https://github.com/un-rohit/currency-converter-app"
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
