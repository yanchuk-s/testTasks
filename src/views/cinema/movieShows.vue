<template>
    <div class="container">
        <div class="movie-shows">
            <div v-for="(movieShow, index) in moviesShows"
                 :key="index"
                 class="movie-shows__movie">
                <div class="movie-wrp">
                    <div class="movie-shows__movie-info">
                        <div class="img">
                            <img :src="getInfoAboutMovie(movieShow.movie_id).pictureLink" :alt="getInfoAboutMovie(movieShow.movie_id).name">
                        </div>
                        <div class="name">
                            {{getInfoAboutMovie(movieShow.movie_id).name}}
                        </div>
                        <div class="date">
                            Start time: {{dateFormat(movieShow.date)}} {{timeFormat(movieShow.time)}}
                        </div>
                        <div class="price">
                            Price: {{movieShow.ticketPrice}}
                        </div>
                    </div>
                    <movie-show :movieShow="movieShow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import formatDate from '@/mixins/format-date';
import movieShow from '@/components/cinema/movie-show';

export default {
  mixins:[formatDate],
  components: {
    movieShow
  },
  created () {
    this.getMoviesShows();
    this.getMovies();
  },
  computed: {
    ...mapGetters('cinema', [
      'moviesShows',
      'movies'
    ])
  },
  methods: {
    ...mapActions('cinema', [
      'getMoviesShows',
      'getMovies',
      'bookingPlace',
    ]),
    getInfoAboutMovie (id) {
        let movie = {};
        this.movies.forEach(item => {
          if (item._id === id) movie = item;
        });

      return movie;
    },
  }
}
</script>

<style lang="scss">
    .movie-wrp{
        display: flex;
    }
    .movie-shows{
        &__movie{
            background-color: #2a2727;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            &-info{
                .img{
                    width: 300px;
                    height: 420px;
                    min-width: 300px;
                    min-height: 420px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .name{
                    font-size: 15px;
                    font-weight: 500;
                    margin-top: 12px;
                    text-transform: capitalize;
                }
                .date{
                    margin-top: 20px;
                    font-weight: 600;
                }
                .price {
                    margin-top: 12px;
                    font-weight: 600;
                    font-size: 18px;
                }
            }
        }
    }
    @media (max-width: 991px) {
        .movie-wrp{
            flex-direction: column;
        }
        .movie-shows{
            &___movie{
                &-info{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
        .movie-shows-wrp .tickets{
            margin-left: 0;
            margin-top: 30px;
        }
        .movie-shows__movie-info .img{
            width: 100%;
            height: 100%;
            min-height: auto;
            img{
                max-width: 320px;
            }
        }
    }
    @media (max-width: 470px) {
        .movie-shows-wrp .tickets .movie-screen{
            width: 100%;
            span{
                width: 100%;
            }
            .tickets-row .tickets-places{
                margin: 4px;
            }
        }
    }
</style>