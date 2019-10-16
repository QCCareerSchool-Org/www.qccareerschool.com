import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { DefaultLayout } from '../layouts/default-layout';

const Courses = () => (
  <DefaultLayout>
    <Container>
      <Row>
        <Col xs="12" md="8" lg="6" className="offset-md-1 mb-4 mb-lg-0">
          <h1>sjkdhskdjh</h1>
        </Col>
        <Col xs="12" md="8" lg="6">sdjkfhsdkjfhM</Col>
        <Card>
          <Card.Body>
            sdfkjdslfkj
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </DefaultLayout>
);

export default Courses;
