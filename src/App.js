import React, { useState } from "react";
import styled from "styled-components";
import {
  MyRow,
  MyButton,
  MyButtonToggle,
  MyList
} from "./components/my-components";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import "./styles.css";

const initialData = {
  skills: [{ id: 1, name: "Kotlin", desc: "good" }],
  profiles: []
};

export default function App() {
  const [skills, setSkills] = useState(initialData.skills || []);
  const [profiles, setProfiles] = useState(initialData.profiles || []);

  return (
    <Container fluid style={{ padding: "30px" }} className="App">
      <Row>
        <Jumbotron>
          <h1>Resume Maker</h1>
          <p>
            Tool for editing and exporting a resume. Will support styling,
            profiles and exporting to several formats.
          </p>
        </Jumbotron>
      </Row>
      <MyRow components={[<p>1</p>, <p>2</p>]} />
      <ListSkills skills={skills} />
      <Row />
      <Row>
        <hr style={{ margin: "10px" }} />
      </Row>
      <Row>
        <MyButton text="Save" />
        <MyButton text="Export to PDF" />
        <MyButton text="Export to JSON" />
      </Row>
    </Container>
  );
}

const DivSkills = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;

const MySubtitle = styled.h2`
  color: white;
  background-color: gray;
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;

const ListSkills = ({ skills }) => (
  <DivSkills>
    <MySubtitle>Skills</MySubtitle>
    <MyList elems={skills} mappingFn={s => <Skill skill={s} />} />
    <MyButton text="+" />
  </DivSkills>
);

const Skill = ({ skill }) => (
  <span key={skill.id}>
    {skill.name}: {skill.desc}
  </span>
);
