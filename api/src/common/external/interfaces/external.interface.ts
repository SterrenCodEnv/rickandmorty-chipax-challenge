export interface IAllAPIData {
  info: Info;
  results: Results[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface Location {
  name: string;
  url: string;
}
