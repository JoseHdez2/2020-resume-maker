import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MyButton, MyList } from "./components/my-components";
import { FixedSizeList } from "./components/my-virtual-lists";
import ContentEditable from "react-contenteditable";
import { Row, Col, Badge, Card, Container, Jumbotron } from "react-bootstrap";
import "./styles.css";
import { jsPDF } from "jspdf";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import kanji from "./data/kanji";
// import kanji200 from "./data/0200";
import { WithVirtualList } from "./components/with-virtual-list";
import { useHandleContentEditable } from "./hooks/my-hooks";

export default function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "Paco" },
    { id: "2", name: "Pepe" },
    { id: "3", name: "Julián" }
  ]);

  const updateUsers = user => {
    setUsers([...users.map(u => (u.id === user.id ? user : u))]);
  };

  const handleDragEnd = result => {};

  return (
    <Container fluid style={{ padding: "30px" }} className="App">
      <Row>
        <Jumbotron>
          <h1>Learn Kanji</h1>
          <p>
            Tool for learning and remembering kanji. Will support searching by
            primitive, and exporting to JSON and PDF.
          </p>
        </Jumbotron>
      </Row>
      <Row>
        <Col>
          <Row>
            {/*             <DragDropContext onDragEnd={handleDragEnd}> */}
            {/* <Droppable droppableId={1}> */}
            {provided => (
              <WithVirtualList
                elems={users}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {element => (
                  // <Draggable draggableId={element.id}>
                  <User
                    user={element}
                    users={users}
                    updateUsers={updateUsers}
                  />
                  // </Draggable>
                )}
              </WithVirtualList>
            )}
            {/*               </Droppable>
            </DragDropContext> */}
          </Row>
          <Row>{JSON.stringify(users)}</Row>
        </Col>
        <Col>
          <WithVirtualList elems={kanji}>
            {element => <Kanji kanji={element} />}
          </WithVirtualList>
        </Col>
      </Row>
      <Row>
        <MyButton text="Save" />
        <MyButton text="Export to PDF" onClick={exportToPdf} />
        <MyButton text="Export to JSON" />
      </Row>
    </Container>
  );
}

const IdSpan = styled.span`
  font-size: xx-small;
`;

const Kanji = ({ kanji }) => (
  <>
    <IdSpan>{kanji.id}</IdSpan> <Badge variant="secondary">{kanji.kanji}</Badge>{" "}
    <span>{kanji.name}</span>
  </>
);

const User = ({ user, updateUsers }) => {
  const [text, handleChange, handleKeyDown] = useHandleContentEditable(
    user,
    updateUsers
  );

  return (
    <ContentEditable
      html={text.current}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};

const exportToPdf = () => {
  var doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
};
