import React from 'react';
import { ListGroup } from 'react-bootstrap';
 interface Props{
   name:string;
   alpha:string;
   id:string
   isActive:boolean;
   onActive:React.MouseEventHandler
 }
const CountryItem:React.FC<Props> = ({name,alpha,id,isActive,onActive}) => {
  return (
      <ListGroup.Item as="li" active={isActive} className="text-start" onClick={onActive}>
        {name}
      </ListGroup.Item>
  );
};

export default CountryItem;