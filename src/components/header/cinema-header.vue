<template>
    <div class="cinema-header">
        <div class="container">
            <div class="cinema-header__nav">
                <div class="cinema-header__nav-links">
                    <router-link to="/cinema/movies">Movies</router-link>
                    <router-link to="/cinema/movie-shows">Movies shows</router-link>
                </div>
                <div class="cinema-header__nav-search">
                    <input type="text"
                           placeholder="search"
                           v-model="search"
                           @keyup="getMovieByName"
                    >
                    <img @click="applySearch" class="search-apply" v-if="search" src="@/assets/img/search.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data: () => ({
    search: ''
  }),
  methods: {
    ...mapActions('cinema',[
      'getMoviesByName',
      'getMovies'
    ]),
    getMovieByName (event) {
      if (event.keyCode === 13) {
        this.search ? this.getMoviesByName(this.search) : this.getMovies();
        window.getApp.$emit('CLEAR_FILTER');
      }
    },
    applySearch () {
      this.search ? this.getMoviesByName(this.search) : this.getMovies();
      window.getApp.$emit('CLEAR_FILTER');
    }
  }
}
</script>

<style lang="scss">
    .cinema-header{
        height: 50px;
        background-color: #221f1f;
        border-bottom: 1px solid rgba(255,255,255,.1);
        position: static;
        top: 0;
        margin-bottom: 30px;
        .container{
            height: 100%;
        }
        &__nav{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-links{
                display: flex;
                a{
                    color: #ffffff;
                    opacity: 0.7;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    position: relative;
                    font-size: 15px;
                    padding-right: 18px;
                    margin-right: 18px;
                    &:first-child{
                        &:after{
                            content: '';
                            width: 2px;
                            height: 36px;
                            background: rgba(255,255,255,.2);
                            position: absolute;
                            right: 0;
                        }
                    }
                }
                .router-link-exact-active{
                    opacity: 1;
                }
            }
        }
        &__nav-search{
            position: relative;
            input{
                outline: none;
                border: none;
                padding: 7px 11px;
                width: 150px;
                border-radius: 4px;
            }
            .search-apply{
                position: absolute;
                width: 20px;
                height: 20px;
                right: 5px;
                top: 3px;
                cursor: pointer;
            }
        }
    }
</style>