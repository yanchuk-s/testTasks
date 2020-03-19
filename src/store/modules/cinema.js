import cinemaApi from '@/api/cinema';

export default {
  namespaced: true,

  state () {
    return {
      movies: [],
      moviesShows: [],
      bookingTicket: null,
      movie: [],
      movieShow: [],
      movieGenres: [
        {
          id: 0,
          title: 'ACTION'
        },
        {
          id: 1,
          title: 'ADVENTURES'
        },
        {
          id: 2,
          title: 'COMEDY'
        },
        {
          id: 3,
          title: 'DRAMA'
        },
        {
          id: 4,
          title: 'HORROR'
        },
        {
          id: 5,
          title: 'WESTERNS'
        }
      ]
    }
  },
  getters: {
    movies: state => state.movies,
    movieGenres: state => state.movieGenres,
    moviesShows: state => state.moviesShows,
    movie: state => state.movie,
    movieShow: state => state.movieShow,
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items;
    },
  },
  actions: {
    getMovies ({ commit }) {
      cinemaApi.getMovies()
        .then((response) => {
          commit('set', {type: 'movies', items: response.data});
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
    getMoviesByGenres ({ commit }, params) {
      this.state.movies= [];
      cinemaApi.getMoviesByGenres(params)
        .then((response) => {
          commit('set', {type: 'movies', items: response.data});
       })
        .catch(() => { alert('Something is wrong please try again') });
    },
    getMoviesByName ({ commit }, params) {
      this.state.movies= [];
      cinemaApi.getMoviesByName(params)
        .then((response) => {
          commit('set', {type: 'movies', items: response.data});
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
    getMoviesShows ({ commit }) {
      cinemaApi.getMoviesShows()
        .then((response) => {
          commit('set', {type: 'moviesShows', items: response.data})
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
    bookingPlace ({ commit }, params) {
      cinemaApi.bookingPlace(params)
        .then((response) => {
          commit('set', {type: 'bookingTicket', items: response.data});
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
    getMoviesById ({ commit }, params) {
      cinemaApi.getMoviesById(params)
        .then((response) => {
          commit('set', {type: 'movie', items: response.data});
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
    getMovieShowById ({ commit }, params) {
      cinemaApi.getMovieShowById(params)
        .then((response) => {
          commit('set', {type: 'movieShow', items: response.data});
        })
        .catch(() => { alert('Something is wrong please try again') });
    },
  }
}