import Vue from 'vue';
import Vuex from 'vuex';

import products from './modules/products';
import cinema from './modules/cinema';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    products,
    cinema
  }
});

export default store;

