import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'c850ec5ba16f4b711da56dfde72a63cf';

export const getTrendingMovies = async () => {
  const query = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(query);
  return movies;
};

export const getMovieCast = async movieId => {
  const query = `movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(query);
  return data;
};

export const getSearchMovies = async searchParam => {
  const query = `search/movie?api_key=${KEY}&page=1&query=${searchParam}`;
  const { data: movies } = await axios.get(query);
  return movies;
};

export const getMovieDetails = async movieId => {
  const query = `movie/${movieId}$?api_key=${KEY}`;
  const { data: movie } = await axios.get(query);
  return movie;
};

export const getMovieReviews = async movieId => {
  const query = `movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(query);
  return data;
};