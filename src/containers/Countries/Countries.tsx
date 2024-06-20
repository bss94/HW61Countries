import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CountryList from '../../components/CountryList/CountryList';
import CountryInfo from '../../components/CountryInfo/CountryInfo';

const Countries = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <CountryList/>
        </Col>
        <Col xs={10}>
          <CountryInfo/>
        </Col>
      </Row>
    </Container>
  );
};

export default Countries;