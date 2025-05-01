import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  // DiPython, // Removed Python
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  // SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiKotlin,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin /> {/* Kotlin */}
      </Col>
      {/* Add more tech icons based on your skills */}
    </Row>
  );
}

export default Techstack;
