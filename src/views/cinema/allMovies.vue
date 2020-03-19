<template>
    <div class="container">
        <cinema-filters />
        <div v-if="movies.length && movies"
             class="movies-list"
        >
            <div class="movies-list__item"
                 v-for="(movie, index) in movies"
                 :key="index"
                 @click="toMovie(movie._id)"
            >
                <div class="movies-list__item-poster">
                    <img :src="movie.pictureLink" :alt="movie.name">
                    <div class="mask"></div>
                </div>
                <div class="movies-list__item-name">
                    {{movie.name}}
                </div>
                <div class="movies-list__item-genre">
                    {{getGenresById(movie.genre_id)}}
                </div>
                <div class="movies-list__item-release">
                    Release: {{releaseDateFormat(movie.dateOfRelease)}}
                </div>
            </div>
        </div>
        <div v-else class="no-result">
            No results
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from  'moment';
import cinemaFilters from '@/components/cinema/cinema-filters';
import genresById from '@/mixins/genres-by-id';
export default {
  mixins: [genresById],
  components: {
    cinemaFilters
  },
  computed: {
    ...mapGetters('cinema',[
      'movies',
      'movieGenres',
    ])
  },
  methods: {
    releaseDateFormat (date) {
      return moment(date).format("YYYY-MM-DD");
    },
    toMovie (id) {
      this.$router.push({ path: `/cinema/movie/${id}` }) // -> /user/123
    }
  }
}
</script>

<style lang="scss">
    .movies-list{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        &__item{
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-basis: calc(20% - 12px);
            -ms-flex: auto;
            margin: 12px 0 12px 12px;
            box-sizing: border-box;
            cursor: pointer;
            &:last-child{
                margin-right: 0;
            }
            &-poster{
                position: relative;
                height: 290px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 6px;
                    position: relative;
                }
                .mask{
                    display: none;
                    position: absolute;
                    border-radius: 6px;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    background-color: rgba(0,0,0,.35);
                    z-index: 1;
                }
                &:hover{
                    .mask{
                        display: block;
                    }
                }
            }
            &-name{
                font-size: 14px;
                font-weight: 600;
                margin-top: 12px;
                text-transform: capitalize;
                &:hover{
                    color: red;
                }
            }
            &-genre{
                font-size: 12px;
                margin-top: 8px;
            }
            &-release{
                font-size: 12px;
            }
        }
    }
    .no-result{
        color: #cccccc;
        font-size: 16px;
        margin: 20px 0;
    }
    @media(max-width: 991px) {
        .movies-list{
            &__item{
                flex-basis: calc(33.33% - 12px);
            }
        }
    }
    @media(max-width: 555px) {
        .movies-list{
            &__item{
                flex-basis: calc(50% - 12px);
            }
        }
    }
    @media(max-width: 375px) {
        .movies-list{
            &__item{
                flex-basis: 100%;
                margin: 12px 0 12px 0;
            }
        }
    }
</style>