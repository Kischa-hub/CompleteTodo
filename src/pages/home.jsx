import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function Home(props) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Project Overview
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>its a simple Todo List using ReactJs. Features:</p>
              <ol>
                <li>Adding Task with periority</li>
                <li>Edit Task</li>
                <li>Delete Task</li>
                <li>show completed Task</li>
                <li>Register - login </li>
                <li>Support English and German</li>
              </ol>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Used Technology - Liberary
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ol>
                <li>ReactJs</li>
                <li>Bootstrap & React-Bootstrap</li>
                <li>react-router-dom</li>
                <li>Hooks</li>
                <li>json-server</li>
                <li>Axios</li>
                <li>Sentry for Logging</li>
                <li>Joi Validation</li>
              </ol>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Contact
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/km-elhosseny/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="https://github.com/Kischa-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Home;
