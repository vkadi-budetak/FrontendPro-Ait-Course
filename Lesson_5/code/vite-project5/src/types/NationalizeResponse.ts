interface CountryInfo {
  country_id: string;
  probability: number;
}

export interface NationalizeResponse {
  count: number;
  name: string;
  country: CountryInfo[];
}
