import Vue from 'vue';
import Vuex from 'vuex';
import TaskThreeAPI from '@/api/taskThreeApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state () {
    return {
      products: []
    }
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items;
    },
  },
  actions: {
    getProducts ({ commit }) {
      TaskThreeAPI.getProducts().
        then((response) => {
          commit('set', {type: 'products', items: JSON.parse(atob(response.data))})
      })
    }
  },
});
