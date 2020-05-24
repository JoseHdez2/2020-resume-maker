import React, { useState } from "react";
import { Row, Col, Alert, Button, ListGroup } from "react-bootstrap";

// is this dangerous?
export const MyRow = ({ components }) => (
  <Row>
    {components.map(c => (
      <Col>{c}</Col>
    ))}
  </Row>
);

// Need this so buttons aren't all jumbled up.
const buttonMargin = { margin: "5px" };

// https://react-bootstrap.github.io/components/buttons/
// Most common usage of a Button.
export const MyButton = ({
  text,
  onClick,
  disabled = false,
  variant = "secondary"
}) => (
  <Button
    variant={variant}
    disabled={disabled}
    style={buttonMargin}
    onClick={onClick}
  >
    {text}
  </Button>
);

// https://react-bootstrap.github.io/components/button-group/
export const MyButtonToggle = ({ getter, setter, values }) => {
  <ButtonGroup>
    {values.map(v => (
      <MyButton
        text={v}
        onClick={() => setter(v)}
        variant={v === getter ? "primary" : "secondary"}
        disabled={v === getter}
      />
    ))}
  </ButtonGroup>;
};

// https://react-bootstrap.github.io/components/list-group/
// Most common usage of ListGroup.
export const MyList = ({ elems, mappingFn = e => e }) => (
  <ListGroup>
    {elems.map(e => (
      <ListGroup.Item>{mappingFn(e)}</ListGroup.Item>
    ))}
  </ListGroup>
);

// https://react-bootstrap.github.io/components/alerts/#dismissing
const AlertDismissible = ({ heading, content }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{content}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};
