<template>
    <div class="container">
        <div class="movie-wrp">
            <div class="movie-wrp__img">
                <img :src="movie.pictureLink" :alt="movie.name">
            </div>
            <div class="movie-wrp__info">
                <div class="movie-wrp__info-title">
                    {{movie.name}}
                </div>
                <div class="movie-wrp__info-description">
                    {{movie.description}}
                </div>
                <div class="movie-wrp__info-release">
                    Release: {{dateFormat(movie.dateOfRelease)}}
                </div>
                <div class="movie-wrp__info-show">
                    Start time: {{dateFormat(movieShow.date)}} {{timeFormat(movieShow.time)}}
                </div>
                <movie-show :movieShow="movieShow"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import genresById from '@/mixins/genres-by-id';
import formatDate from '@/mixins/format-date';
import movieShow from '@/components/cinema/movie-show';

export default {
  mixins: [genresById, formatDate],
  components: {
    movieShow
  },
  created () {
    this.getMoviesById(this.$route.params.id);
    this.getMovieShowById(this.$route.params.id);
  },
  computed: {
    ...mapGetters('cinema', [
      'movie',
      'movies',
      'movieShow',
    ])
  },
  methods: {
    ...mapActions('cinema', [
      'getMoviesById',
      'getMovieShowById',
    ]),
  }
}
</script>

<style lang="scss">
    .movie-wrp{
        display: flex;
        &__img{
            img{
                width: 300px;
                min-width: 300px;
            }
        }
        &__info{
            margin-left: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            &-title{
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 8px;
                text-transform: capitalize;
                width: 100%;
            }
            &-genre{
                font-size: 15px;
                margin-bottom: 20px;
                width: 100%;
            }
            &-description{
                text-align: left;
                font-size: 15px;
                margin-bottom: 12px;
                width: 100%;
            }
            &-release{
                text-align: left;
                margin-bottom: 20px;
                width: 100%;
            }
            &-show{
                margin: 20px 0 40px 0;
                font-size: 18px;
                font-weight: 600;
                width: 100%;

            }
            .tickets{
                margin-left: 0;
            }
        }
    }
    @media (max-width: 991px) {
        .movie-wrp{
            flex-direction: column;
            &__img{
                width: 100%;
                height: auto;
                img{
                    width: 300px;
                }
            }
            &__info{
                margin-left: 0;
                .tickets{
                    margin-left: 0;
                }
            }
        }
    }
    @media (max-width: 470px) {
        .tickets .movie-screen{
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