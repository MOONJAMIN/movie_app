const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWEzZjY5MzU5Y2QzZGZiNDEwZTA5MGQ0NWEzNzY5NSIsIm5iZiI6MTcyMDc2ODAxOC42OTUwMDYsInN1YiI6IjY2OGY5NzUxOGUzOWM5YzlmMjEwZWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPAGpIaHpOTrIZdyfqGGu3EfkY7ZXqL4iMHc3G_RwMs",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};
export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
