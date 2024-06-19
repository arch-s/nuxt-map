export interface AutocompleteResponse {
  data: Array<CountryResponse>;
}

interface CountryResponse {
  code: string;
  name: string;
}
