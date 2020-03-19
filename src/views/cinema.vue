<template>
    <div class="cinema-wrp">
        <cinema-header />
        <transition name="page" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import cinemaHeader from '@/components/header/cinema-header.vue';
import {mapActions} from "vuex";

export default {
  components: {
    cinemaHeader
  },
  created () {
    this.getMovies();
  },
  methods: {
    ...mapActions('cinema', [
      'getMovies'
    ]),
  }
}
</script>

<style lang="scss">
    .cinema-wrp{
        background-color: #221f1f;
        color: #ffffff;
        height: auto;
        min-height: 100%;
    }
    .page-enter-active, .page-leave-active {
        transition: opacity .6s, transform .6s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>