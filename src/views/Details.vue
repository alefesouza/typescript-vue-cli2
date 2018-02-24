<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Details extends Vue {
  get selectedEvent() {
    return this.$store.state.events.find(e => e.id === this.$route.params.id);
  }
}
</script>

<template>
  <div>
    <h1>{{ selectedEvent.name }}</h1>
    <p v-html="selectedEvent.description"></p>
  </div>
</template>
