import React, { useState } from "react";
import styled from "styled-components";
import {
  MyRow0,
  MyRow,
  MyButton,
  MyButtonToggle,
  MyList
} from "./components/my-components";
import { MyContEdit } from "./components/my-experiments";
import { MyListAppendableCard } from "./components/my-lists";
import { Card, Container, Row, Jumbotron } from "react-bootstrap";
import "./styles.css";
import { jsPDF } from "jspdf";

const initialData = {
  skills: [{ id: 1, name: "Kotlin", desc: "good" }],
  profiles: [{ id: 1000, name: "Frontend" }, { id: 1001, name: "Backend" }]
};

export default function App() {
  const [skills, setSkills] = useState(initialData.skills || []);
  const [profiles, setProfiles] = useState(initialData.profiles || []);
  const [fruit, setFruit] = useState("");

  const addSkill = () => setSkills([...skills, { id: 0, name: "New" }]);

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
      <MyRow0
        components={[
          <span>{fruit || "---"}</span>,
          <MyButtonToggle
            getter={fruit}
            setter={setFruit}
            values={["apple", "banana", "coconut"]}
          />
        ]}
      />
      <MyListAppendableCard
        title={"Skills"}
        elems={skills}
        addElem={addSkill}
        mappingFn={s => <Skill skill={s} />}
      />
      <Row />
      <Row>
        <hr style={{ margin: "10px" }} />
      </Row>
      <Row>
        <MyButton text="Save" />
        <MyButton text="Export to PDF" onClick={exportToPdf} />
        <MyButton text="Export to JSON" />
      </Row>
    </Container>
  );
}

const ListSkills = ({ skills }) => (
  <Card style={{ padding: "10px" }}>
    <h2>Skills</h2>
    <MyList elems={skills} mappingFn={s => <Skill skill={s} />} />
    <MyButton text="+" />
  </Card>
);

const Skill = ({ skill }) => (
  <div key={skill.id}>
    {skill.name}: {skill.desc}
  </div>
);

const exportToPdf = () => {
  var doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
};
