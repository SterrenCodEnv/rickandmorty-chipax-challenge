export interface IEpisodeLocations {
  exercise_name: string;
  time: string;
  in_time: boolean;
  results: IEpisodeLocationsResult[];
}

export interface IEpisodeLocationsResult {
  locations: string[];
  name: string;
  episode: string;
}
