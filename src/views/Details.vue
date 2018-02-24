<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class Details extends Vue {
  @State('events') meetupEvents: MeetupEvent[];

  get selectedEvent(): MeetupEvent {
    return this.meetupEvents.find(e => e.id === this.$route.params.id);
  }
}
</script>

<template>
  <div v-if="selectedEvent">
    <h1>{{ selectedEvent.name }}</h1>
    <p v-html="selectedEvent.description"></p>
  </div>
</template>
