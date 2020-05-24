import React, { useState } from "react";
import {
  Row,
  Card,
  Col,
  Alert,
  Button,
  ButtonGroup,
  ListGroup
} from "react-bootstrap";
import { MyButton, MyList } from "./my-components";

export const MyListAppendableCard = ({ title, elems, addElem, mappingFn }) => (
  <Card style={{ padding: "10px" }}>
    <h2>{title}</h2>
    <MyListAppendable elems={elems} addElem={addElem} mappingFn={mappingFn} />
  </Card>
);

const MyListAppendable = ({ title, elems, addElem, mappingFn }) => (
  <span>
    <MyList elems={elems} mappingFn={mappingFn} />
    <MyButton text="+" onClick={addElem} />
  </span>
);
