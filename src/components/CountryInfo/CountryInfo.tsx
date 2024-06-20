import React, {useCallback, useEffect, useState} from 'react';
import {CurrentCountry} from '../../types';
import {BASE_URL, COUNTRY_URL, INFO_PROPERTIES} from '../../constants';
import axios from 'axios';
import {Container} from 'react-bootstrap';

interface Props {
  code: string | null;
}

const CountryInfo: React.FC<Props> = ({code}) => {
  const [country, setCountry] = useState<CurrentCountry | null>(null);

  const fetchCountry = useCallback(async () => {
    if (code !== null) {
      const {data: country} = await axios.get<CurrentCountry>(BASE_URL + COUNTRY_URL + code + INFO_PROPERTIES);
      setCountry(country);
    }
  }, [code]);

  useEffect(() => {
    void fetchCountry();
  }, [fetchCountry]);


  return country && (
    <Container className="border border-1 p-5" style={{height: '700px'}}>

    </Container>
  );
};

export default CountryInfo;