interface CountryInfo {
  country_id: string;
  probability: number;
}

export interface NationalizeResponse {
  count: number;
  name: string;
  country: CountryInfo[];
}

// {
//   "count": 718863,
//   "name": "johnson",
//   "country": [
//     {
//       "country_id": "US",
//       "probability": 0.114
//     },
//     {
//       "country_id": "NG",
//       "probability": 0.066
//     },
//     {
//       "country_id": "JM",
//       "probability": 0.059
//     }
//   ]
// }
