import React from 'react';
import CountryItem from './CountryItem';
import {ListGroup} from 'react-bootstrap';
import {CountriesState} from '../../types';

interface Props{
  countries:CountriesState[];
  onActive:(id:string)=>void
}
const CountryList:React.FC<Props> = ({countries,onActive}) => {
  return (
    <ListGroup as="ul" style={{height:'700px',overflowY:'scroll'}}>
      {countries.map((country)=>{
        return <CountryItem
          name={country.name}
          id={country.id}
          isActive={country.isActive}
          alpha={country.alpha3code}
          key={country.id}
          onActive={()=>onActive(country.id)}
        />
      })}

    </ListGroup>
  );
};

export default CountryList;