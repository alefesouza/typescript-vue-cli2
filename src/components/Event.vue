<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Event extends Vue {
  @Prop() event;
}
</script>

<template>
  <div class="meetup-event">
    <h3>{{ event.name }}</h3>
    <span>{{ event.venue.name }}</span>
  </div>
</template>

<style>
h3 {
  margin-top: 0px;
}

.meetup-event {
  padding: 10px;
  border-bottom: 1px solid #dddddd;
  list-style: none;
}

.meetup-event:hover {
  background: #eeeeee;
}
</style>
