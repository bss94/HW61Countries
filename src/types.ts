export interface ApiAllCountries {
  name: string;
  alpha3Code: string;
  independent: boolean;
}

export interface CountriesState {
  name: string;
  alpha3code: string;
  isActive: boolean;
  id: string;
}

export interface CurrentCountry {
  name: string;
  flag: string;
  borders: string[];
  capital: string;
  region: string;
  subregion:string;
}