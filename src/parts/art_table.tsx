import * as React from "react"
import { Button, Badge, Form, Col, Row, Figure, Modal, Accordion, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { center, left } from "../parts/styles"
import { useState } from "react";
import Arts from "../data/ai_art_data.json";

interface ArtData {
  no: number,
  url: string,
  prompt: string,
  tags: string[]
}

const ArtTable = () => {
  const [selectedItem, setSelectedItem] = useState<object | undefined>(undefined);
  const [filteredArts, setFilteredArts] = useState(Arts.data)
  const [useRegex, setUseRegex] = useState<boolean>(false)
  const [keyword, setKeyword] = useState("");
  const [isRegexInvalid, setIsRegexInvalid] = useState(false);

  const onOpenDialog = (name: object) => {
    setSelectedItem(name);
  }

  const onCloseDialog = () => {
    setSelectedItem(undefined);
  }

  React.useEffect(() => {
    let list: string[] = keyword.split(/\s+/)
    let translate = Arts.translations
    const translatedList: string[] = list.map((e) => {
      if (e.match(RegExp("[a-zA-Z]+")) != null) {
        e.toLocaleLowerCase()
        try {
          return translate[Object.keys(translate).find((k) => k === e) ?? e] ?? e
        }
        catch (error) {
        }
      }
      return e
    })
    if (useRegex) {
      let regex: RegExp;
      try {
        regex = RegExp(keyword)
        setFilteredArts(Arts.data
          .filter((e: ArtData) => regex
          .test(e.tags.join(""))
          || keyword === ""))
        setIsRegexInvalid(false)
      } catch (error) {
        setIsRegexInvalid(true)
      }
    }
    else {
      let numbers: string[]
      setFilteredArts(Arts.data
        .filter((e: ArtData) => translatedList
        .every((k: string) => {
          //マイナス検索
          if (k.match(/^\-/) != null) 
            return !e.tags.includes(k.substring(1))
          //ナンバー検索
          if (k.match(/^\.[0-9]*\-[0-9]*$/) != null) {
            numbers = k.substring(1).split("-")
            return Number(numbers[0]) <= e.no && e.no <= Number(numbers[1])
          }
          if (k.match(/^\.[0-9]*$/) != null)
            return e.no == Number(k.substring(1))
          //通常検索
          return e.tags.includes(k)
        })
        || keyword === "")
      )
    }
  }, [keyword, useRegex])

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" onChange={(e) => {setKeyword(e.target.value)}} placeholder="Search..." isInvalid={isRegexInvalid} />
        <Button variant={filteredArts.length == 0 ? "danger" : "secondary"} disabled >件数▼{filteredArts.length}</Button>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Form.Check onClick={(e) => setUseRegex(Boolean(e.target.checked))} label="正規表現を使う" />
      </Stack>
      <hr />

      <Row xs={2} md={4} className="g-2">
        {filteredArts.map((art: ArtData, index: number) => {
        return (
        <>      
        <Col key={art.url}>
          <Figure onClick={() => onOpenDialog(art)} as="p">
            <Figure.Image src={art.url} />
          </Figure>
          <Modal show={art === selectedItem} onHide={onCloseDialog} restoreFocus={false} size="lg">
          <Modal.Header closeButton onPointerUp={onCloseDialog}>No. {art.no}</Modal.Header>
          <Modal.Body style={center}>
            <Figure.Image src={art.url} />
            <Accordion defaultActiveKey="-1" style={left}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>プロンプト表示</Accordion.Header>
              <Accordion.Body>
                <>
              {art.prompt.split(/(\n)/).map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    { item.match(/\n/) ? <br /> : item }
                  </React.Fragment>)})}
                  </>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </Modal.Body>
          <Modal.Footer onPointerUp={onCloseDialog}>
            {art.tags.map((tag) => 
              <Badge bg="primary">{tag}</Badge>
            )}
          </Modal.Footer>
        </Modal>        
        </Col>
        </>
        )})}
      </Row>
    </>
  )
}

export default ArtTable;
