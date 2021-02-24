import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const DrawRoom = ({ onDraw }) => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C1, setC1] = useState("");
  const [C2, setC2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onDraw({ A, B, C1, C2 });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>A</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Side A"
          value={A}
          onChange={(e) => setA(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>B</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Side B"
          value={B}
          onChange={(e) => setB(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>C1</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Side C1"
          value={C1}
          onChange={(e) => setC1(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>C2</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Side C2"
          value={C2}
          onChange={(e) => setC2(e.target.value)}
        />
      </Form.Group>
      <Button as="input" type="submit" value="Draw Room" />
    </Form>
  );
};

export default DrawRoom;
