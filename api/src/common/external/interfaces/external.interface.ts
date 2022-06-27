export interface IAllAPIData {
  info: Info;
  results: CharacterResults[] | LocationResults[] | EpisodeResults[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface LocationResults {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

interface EpisodeResults {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

interface CharacterResults {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface CharacterLocation {
  name: string;
  url: string;
}

enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

enum CharacterSpecies {
  Alien = 'Alien',
  Human = 'Human',
}

enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
