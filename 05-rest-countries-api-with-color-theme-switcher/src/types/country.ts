export type Country = {
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  subregion?: string;
  capital?: string;
  alpha3Code: string;
  flag: string;
  topLevelDomain?: string[];
  currencies?: { name: string }[];
  languages?: { name: string }[];
  borders?: string[];
};
