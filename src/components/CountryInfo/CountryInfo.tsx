import React, {useCallback, useEffect, useState} from 'react';
import {CurrentCountry} from '../../types';
import {BASE_URL, COUNTRY_URL, INFO_PROPERTIES} from '../../constants';
import axios from 'axios';
import {CloseButton, Col, Container, Image, Row} from 'react-bootstrap';

interface Props {
  code: string | null;
  closeInfo: VoidFunction;
}

const CountryInfo: React.FC<Props> = ({
  code,
  closeInfo
}) => {
  const [country, setCountry] = useState<CurrentCountry | null>(null);

  const fetchCountry = useCallback(async () => {
    if (code !== null) {
      const {data: country} = await axios.get<CurrentCountry>(
        BASE_URL + COUNTRY_URL + code + INFO_PROPERTIES);
      if (country.borders.length > 0) {
        const borders = country.borders.map(async (el) => {
          const {data: border} = await axios.get<CurrentCountry>(
            BASE_URL + COUNTRY_URL + el + INFO_PROPERTIES);
          return border.name;
        });
        const bordersName = await Promise.all(borders);
        return setCountry({...country, borders: bordersName});
      }
      setCountry(country);
    }
  }, [code]);

  useEffect(() => {
    void fetchCountry();
  }, [fetchCountry]);

  const close = () => {
    void closeInfo();
    setCountry(null);

  };

  return country && (
    <Container className="border border-1 p-5" style={{height: '700px'}}>
      <Row className="mb-5">
        <Col xs={11}></Col>
        <Col xs={1}>
          <CloseButton onClick={close}/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-start" xs={8}>
          <h1>{country.name}</h1>
          <h5>Capital: {country.capital}</h5>
          <h5>Region: {country.region}</h5>
          <h5>Subregion: {country.subregion}</h5>
        </Col>
        <Col xs={4}>
          <Image src={country.flag} style={{width: '100%'}}/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={4}></Col>
        <Col className="text-start mt-5" xs={4}>
          {country.borders.length > 0
            ? <>
              <h5>Border with:</h5>
              <ul>
                {country.borders.map((border) => {
                  return <li key={Math.random() * 1000}>{border}</li>;
                })}
              </ul>
            </>
            : <h5>Borders none</h5>
          }
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default CountryInfo;