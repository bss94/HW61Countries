import React from 'react';
import {ListGroup} from 'react-bootstrap';

interface Props {
  name: string;
  isActive: boolean;
  onActive: React.MouseEventHandler;
}

const CountryItem: React.FC<Props> = ({name, isActive, onActive}) => {
  return (
    <ListGroup.Item as="li" active={isActive} className="text-start" onClick={onActive}>
      {name}
    </ListGroup.Item>
  );
};

export default CountryItem;