import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ImageC from "./ImageC";
const List = (props) => {
  
  
  return (
    
    <>
      <Container>
        
        <Row>

          {props.image.map((element,id)=>{
            return (
              <Col className="card" lg={4} sm={6} xl={3} xxl={2} key={id} onClick={props.handleOpen}><ImageC  imaged={element}/></Col>
            )
          })}
          </Row>
      </Container>
    </>
  );
};

export default List;
