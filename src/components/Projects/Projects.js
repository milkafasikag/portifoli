import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ethioBalageruImage from "../../Assets/i2.png";
import moviesRecommendationImage from "../../Assets/movies.png";
import faceRecognitionImage from "../../Assets/face.png";
import footballFantasyImage from "../../Assets/football.png";
import snakeGameImage from "../../Assets/snake.png";
import compilerProjectImage from "../../Assets/compiler.png";
import simrenProjectImage from "../../Assets/s.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on while i am learning in the university.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={ethioBalageruImage}
              isBlog={false}
              title="Ethio_balageru E-commerce website"
              description=" use react.js, express.js,mongodb for selling ethiopian cultural dress online "
              ghLink="https://github.com/milkafasikag/ethio-balageru-ecommerce-site-MERNSTACK-.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={moviesRecommendationImage}
              isBlog={false}
              title="movies recommendation system "
              description="using machine learning concept for movie recommendation according to u're genera preference."
              ghLink="https://github.com/milkafasikag/movies---recommendation-system-.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={faceRecognitionImage}
              isBlog={false}
              title="Face  recognition system"
              description="using eigneface and fisher face algorithms for face recognizing "
              ghLink="https://github.com/milkafasikag/face-recognition--Ai.git"
              />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
             imgPath={footballFantasyImage} 
              isBlog={false}
              title="football fantacy app "
              description="Using flutter the app  allows users to create the football team of their dreams, and use those teams to compete versus other users in fantasy leagues based on real-world statistcs, player scores, and match results."
              ghLink="https://github.com/milkafasikag/football-fantacy-app.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGameImage} 
              isBlog={false}
              title="snake-game "
              description="using graphics making easy snake game that reminds us the game we play in nokia phone when we  were children ."
              ghLink="https://github.com/milkafasikag/simple-python-games.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={compilerProjectImage}
              isBlog={false}
              title="compiler-project"
              description="it converts simple js commands to mips assembly language ifOnlyStatement .consoleLogStatement .doWhileStatement .whileStatement .arthimetic operations .assignmentStatement .expressionStatement ................. in to MIPs assembly."
              ghLink="https://github.com/milkafasikag/compiler-project.git"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={simrenProjectImage}
              isBlog={false}
              title="simren-liyu cake"
              description="online cake bakery using pure html , css , js and responsiveness (only using frontend)it was my first website i made for class assignment  "
              ghLink="https://github.com/milkafasikag/UGR-7126-13.git"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
