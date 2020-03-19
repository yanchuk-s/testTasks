import axios from 'axios';

const getMovies = () => {
  return axios.get('https://cinema-api-test.herokuapp.com/movies');
};

const getMoviesByGenres = (genres) => {
  return axios.get(`https://cinema-api-test.herokuapp.com/movies/find?genres=${genres}`);
};
const getMoviesByName = (name) => {
  return axios.get(`https://cinema-api-test.herokuapp.com/movies/find?name=${name}`);
};
const getMoviesById = (id) => {
  return axios.get(`https://cinema-api-test.herokuapp.com/movies?movie_id=${id}`);
};
const getMovieShowById = (id) => {
  return axios.get(`https://cinema-api-test.herokuapp.com/movieShows?movie_id=${id}`);
};
const getMoviesShows = () => {
  return axios.get(`https://cinema-api-test.herokuapp.com/movieShows`);
};
const bookingPlace = (params) => {
  let bodyFormData = new FormData();

  bodyFormData.set('movieShow_id', params.movieShow_id);
  bodyFormData.set('row_id', params.row_id);
  bodyFormData.set('place_position', params.place_position);
  bodyFormData.set('isFree', params.isFree);

  return axios.post(`https://cinema-api-test.herokuapp.com/bookingPlace`, bodyFormData);
};

export default {
  getMovies,
  getMoviesByGenres,
  getMoviesByName,
  getMoviesShows,
  bookingPlace,
  getMoviesById,
  getMovieShowById
};