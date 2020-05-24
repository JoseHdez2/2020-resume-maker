import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";

const initialData = {
  skills: [],
  profiles: []
};

export default function App() {
  const [resume, setResume] = useState(
    initialData
    // JSON.parse(localStorage.resume || initialData)
  );
  const [skills, setSkills] = useState([])

  return (
    <Container fluid style={{ padding: "30px" }} className="App">
      <Row>
        <h1>Resume Maker</h1>
      </Row>
      <ListSkills skills={skills} />
      <Row />
      <Row>
        <SaveButton />
      </Row>
    </Container>
  );
}

const DivSkills = styled.div``;

const ListSkills = ({ skills }) => (
  <DivSkills>
    {skills.map(s => (
      <Skill skill={s} />
    ))}

  </DivSkills>
);
const Skill = ({ skill }) => <span key={skill.id}>Skill</span>;

const SaveButton = ({ skills }) => {
  return <Button>Save</Button>;
};
