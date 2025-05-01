import React, { useState, useEffect } from "react";
import { Container, Row, Button, Nav, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/specialCVRohit.pdf";
import { AiOutlineDownload, AiOutlineEye, AiFillStar, AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaLinkedinIn } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", gap: "1rem", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_self"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineEye />
            &nbsp;View CV
          </Button>
          <Button
            variant="secondary"
            href={pdf}
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Nav.Item className="fork-btn">
            <Button
              href="https://github.com/un-rohit"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav.Item>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/un-rohit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/unrohitkumar"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/unrohit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Row>
      </Container>
      <Container fluid className="footer-section">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Rohit Kumar</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {new Date().getFullYear()} RK</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
