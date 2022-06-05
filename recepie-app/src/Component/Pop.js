import React from 'react'
import {Button , Col, Container, Modal, Row } from 'react-bootstrap'
const Pop = (props) => {
  return (
    <>
      

      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        centered
    
      >
        <Modal.Header closeButton>
          <Modal.Title>RECIPE</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
              <Row>
                  {/* <Col md={6}><img alt='img' src={props.imaged.strMealThumb}/></Col> */}
                  <Col md={6}>
                      <h2>
                          xxnsdnxs
                      </h2>
                      <h3>jsbjsb</h3>
                      <h3>jsbjsb</h3>
                      <h3>jsbjsb</h3>
                  </Col>
              </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Pop
