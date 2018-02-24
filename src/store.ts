import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
  },
  mutations: {
    SET_EVENTS(state, obj) {
      state.events = obj;
    },
  },
  actions: {
    setEvents({ commit }, obj) {
      commit('SET_EVENTS', obj);
    },
  },
});
