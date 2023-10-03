import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArtData from './art_data_impl';
import { center, left } from './styles';
import { Row, Col, Figure, Modal, Accordion, Badge } from 'react-bootstrap';

const InfiniteScrollArts = (props: {showArts: ArtData[], setShowArts: any, page: number, setPage: any, filteredArts: ArtData[]}) => {
  const [selectedItem, setSelectedItem] = useState<object | undefined>(undefined);

  const onOpenDialog = (name: object) => {
    setSelectedItem(name);
  }

  const onCloseDialog = () => {
    setSelectedItem(undefined);
  }

  const loadImages = () => {
    const newShowArts: ArtData[] = [];
    const showNum = 16;
    for (let i = 0; i < showNum; i++) {
      if (props.page * showNum + i >= props.filteredArts.length) break;
      
      newShowArts.push(props.filteredArts[props.page * showNum + i]);
    }

    props.setShowArts((prevArts: ArtData[]) => [...prevArts, ...newShowArts]);
    props.setPage((prevPage: number) => prevPage + 1);
  };

  useEffect(() => {
    loadImages();
  }, [props.filteredArts])

  return (
    <InfiniteScroll dataLength={props.showArts.length} next={loadImages} hasMore={true}>
      <Row xs={2} md={4} className="g-2">
        {props.showArts.map((art: ArtData) => {
        return (
          <Col key={art.no}>
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
                <Badge bg="primary" key={tag}>{tag}</Badge>
              )}
            </Modal.Footer>
          </Modal>        
          </Col>
        )})}
      </Row>
    </InfiniteScroll>
  )
};

export default InfiniteScrollArts;
