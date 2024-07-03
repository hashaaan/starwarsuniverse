import ky from "ky";

export const api = ky.create({
  prefixUrl: "https://swapi.dev/api",
  timeout: 20000,
  retry: 0,
});
