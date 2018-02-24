<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import Event from '../components/Event.vue';

@Component({
  components: {
    Event,
  },
})
export default class Home extends Vue {
  counter: number = 0;

  @Prop({ default: 'default value' })
  value: string;

  @State('events') meetupEvents: MeetupEvent[];

  async mounted() {
    console.log('mounted');
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  get test(): string {
    let itsNumber: number | string = 2;
    itsNumber = 'llala';

    return itsNumber;
  }
}
</script>

<template>
  <div class="hello">
    <h2>{{ test }}</h2>
    <h2>{{ value }}</h2>
    <h2>{{ counter }}</h2>
    <ul>
      <event
        v-for="event in meetupEvents"
        :key="event.id"
        :event="event"
      ></event>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  padding-left: 0px;
}
</style>
