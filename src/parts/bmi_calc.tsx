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
    if (type == 0) {
      setResult(Number(inputs.current[1].current?.value ?? 0) / Math.pow(Number(inputs.current[0].current?.value ?? 0) / 100, pows));
    }    
    else if (type == 1) {
      setResult(Math.pow(Number(inputs.current[2].current?.value ?? 0) / 100, pows) * (Number(inputs.current[3].current?.value ?? 0)));
    }
    else if (type == 2) {
      setResult(Math.pow(Number(inputs.current[4].current?.value ?? 0) / Number(inputs.current[5].current?.value ?? 0), (1 / pows)) * 100);
    }
  };

  const heightForm = (ref: React.RefObject<HTMLInputElement>) => {
    return (
      <Form.Group className="mb-3">
      <Form.Label>身長</Form.Label>
      <Form.Control ref={ref} type="text" placeholder="身長(cm)を入力" />
      </Form.Group>
    )
  }

  const bmiForm = (ref: React.RefObject<HTMLInputElement>) => {
    return (
      <Form.Group className="mb-3">
      <Form.Label>BMI</Form.Label>
      <Form.Control ref={ref} type="text" placeholder="BMIを入力" />
      </Form.Group>
    )
  }

  const weightForm = (ref: React.RefObject<HTMLInputElement>) => {
    return (
      <Form.Group className="mb-3">
      <Form.Label>体重</Form.Label>
      <Form.Control ref={ref} type="text" placeholder="体重(kg)を入力" />
      </Form.Group>
    )
  }

  const tabLists = [
    {
      title: "BMI",
      compornent: <>
        {heightForm(inputs.current[0])}
        {weightForm(inputs.current[1])}
      </>
    },
    {
      title: "体重",
      compornent: <>
        {heightForm(inputs.current[2])}
        {bmiForm(inputs.current[3])}
      </>
    },
    {
      title: "身長",
      compornent: <>
        {weightForm(inputs.current[4])}
        {bmiForm(inputs.current[5])}
      </>
    }
  ]

  return (
    <Tabs
      defaultActiveKey="0"
      id="justify-tab-example"
      className="mb-3"
      fill
    >
      {tabLists.map((value, i) => 
        <Tab eventKey={i} title={value.title} onClick={() => {setType(i)}} key={i}>
          <Form>
            {value.compornent}
            <Form.Group className="mb-3">
              <Button as="input" type="button" value="Input" onClick={onButtonClick}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder={result.toString()} disabled/>
            </Form.Group>
          </Form>
        </Tab>
      )}
    </Tabs>
  )
}

export default BmiCalc;
