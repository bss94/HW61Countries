import React from 'react';
import CountryItem from './CountryItem';
import {ListGroup} from 'react-bootstrap';

const CountryList = () => {
  return (
    <ListGroup as="ul">
      <CountryItem/>
    </ListGroup>
  );
};

export default CountryList;