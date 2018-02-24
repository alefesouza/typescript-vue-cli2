<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import axios from 'axios';

@Component
export default class App extends Vue {
  @Action('setEvents') setEvents;

  readonly URL = 'https://api.meetup.com/VueJS-SP/events/?status=past';

  async mounted() {
    const response = await axios.get<MeetupEvent[]>(this.URL);

    this.setEvents(response.data);
  }
}
</script>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
