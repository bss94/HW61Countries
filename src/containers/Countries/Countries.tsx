import {useCallback, useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CountryList from '../../components/CountryList/CountryList';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import {ApiAllCountries, CountriesState} from '../../types';
import axios from 'axios';
import {BASE_URL, COUNTRIES_URL} from '../../constants';

const Countries = () => {
  const [countries, setCountries] = useState<CountriesState[]>([]);
  const [currentCode, setCurrentCode] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const {data: countries} = await axios.get<ApiAllCountries[]>(BASE_URL + COUNTRIES_URL);
    const newCountries = await Promise.all(countries);
    const mutateCountries = newCountries.map((country, index) => {
      return {
        name: country.name,
        alpha3code: country.alpha3Code,
        isActive: country.independent,
        id: String(index + 1),
      };
    });
    setCountries(mutateCountries);
  }, []);


  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const onHandleActive = (id: string) => {
    setCountries(prevState => {
      return prevState.map((country) => {
        if (country.id === id) {
          setCurrentCode(country.alpha3code);
          return {...country, isActive: true};
        }
        if (country.id !== id && country.isActive) {
          return {...country, isActive: false};
        }
        return country;
      });
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <CountryList countries={countries} onActive={onHandleActive}/>
        </Col>
        <Col xs={9}>
          <CountryInfo code={currentCode}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Countries;