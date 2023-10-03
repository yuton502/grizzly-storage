import * as React from "react"
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, createRef } from "react";


const BmiCalc = () => {
  const [result, setResult] = useState(0.0);
  const [type, setType] = useState(0);
  const list = [0, 1, 2, 3, 4, 5]
  const pows = 2.25
  const inputs = useRef(list.map(() => createRef<HTMLInputElement>()));
  const onButtonClick = () => {
    const values = inputs.current.map((input) => Number(input.current?.value) || 0);
    if (type === 0) {
      setResult(values[1] / Math.pow(values[0] / 100, pows));
    } else if (type === 1) {
      setResult(Math.pow(values[2] / 100, pows) * values[3]);
    } else if (type === 2) {
      setResult(Math.pow(values[4] / values[5], 1 / pows) * 100);
    }
  };

  const renderForm = (label: string, ref: React.RefObject<HTMLInputElement>, unit?: string) => {
    return (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control ref={ref} type="text" placeholder={`${label}${unit !== undefined ? `(${unit})` : ""}を入力`} />
      </Form.Group>
    );
  };
  
  const tabLists = [
    {
      title: "BMI",
      components: [renderForm("身長", inputs.current[0], "cm"), renderForm("体重", inputs.current[1], "kg")],
    },
    {
      title: "体重",
      components: [renderForm("身長", inputs.current[2], "cm"), renderForm("BMI", inputs.current[3])],
    },
    {
      title: "身長",
      components: [renderForm("体重", inputs.current[4], "kg"), renderForm("BMI", inputs.current[5], "cm")],
    },
  ];

  return (
    <Tabs defaultActiveKey="0" id="justify-tab-example" className="mb-3" fill>
      {tabLists.map((value, i) => (
        <Tab eventKey={i} title={value.title} onClick={() => setType(i)} key={i}>
          <Form>
            {value.components}
            <Form.Group className="mb-3">
              <Button as="input" type="button" value="Input" onClick={onButtonClick} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder={result.toString()} disabled />
            </Form.Group>
          </Form>
        </Tab>
      ))}
    </Tabs>
  );
}

export default BmiCalc;
