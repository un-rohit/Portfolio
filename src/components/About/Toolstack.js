import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { SiSlack, SiTableau, SiAndroidstudio, SiGithub, SiGit, SiRstudio, SiMicrosoftexcel } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau /> {/* Tableau */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> {/* Android Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel /> {/* Excel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio /> {/* R Studio */}
      </Col>
    </Row>
  );
}

export default Toolstack;
