<template>
    <div class="cinema-filters">
        <div class="cinema-filters__list">
            <button @click="getAllMovies">
                ALL MOVIE
            </button>
            <button v-for="(genres, index) in movieGenres"
                    :key="index"
                    :class="{'select-filter' : selectGenres === genres.id}"
                    @click="applyFilter(genres.id)"
            >
                {{genres.title}}
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';
export default {
  data: () => ({
    selectGenres: null
  }),
  created () {
    window.getApp.$on('CLEAR_FILTER', () => {
      this.selectGenres = null;
    });
  },
  computed: {
    ...mapGetters('cinema',[
      'movieGenres'
    ])
  },
  methods: {
    ...mapActions('cinema', [
      'getMoviesByGenres',
      'getMovies'
    ]),
    applyFilter (id) {
      this.selectGenres = id;
      this.getMoviesByGenres(id);
    },
    getAllMovies () {
      this.selectGenres = null;
      this.getMovies();
    }
  }
}
</script>

<style lang="scss">
    .cinema-filters{
        &__list{
            display: flex;
            justify-content: center;
            button{
                background: none;
                color: #ffffff;
                border: none;
                outline: none;
                font-weight: 600;
                margin: 0 5px;
                padding: 4px 5px;
                display: block;
                cursor: pointer;
            }
            .select-filter{
                background-color: red;
            }
        }
    }
</style>