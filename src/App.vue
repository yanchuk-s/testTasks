<template>
  <div id="app">
      <common-header />
    <router-view/>
  </div>
</template>

<script>
import commonHeader from './components/header/Header.vue'
export default {
  components: {
    commonHeader
  }
}
</script>

<style lang="scss">
body{
    padding: 0;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    .container{
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
    }
}
</style>
