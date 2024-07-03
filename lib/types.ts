export type PlanetsResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    diameter: string;
    terrain: string;
    population: string;
    orbital_period: string;
    url: string;
  }[];
};
