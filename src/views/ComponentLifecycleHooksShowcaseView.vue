<template>
  <div class="components-lc-hooks">
    <div>
      <img src="../assets/lc-hooks.png" width="600" />
    </div>
    <div class="components-lc-hooks__hook-display">
      <div>
        <button type="button" @click="value += 1">Mutate value!</button>
        <span>Value: {{ value }}</span>
      </div>
      <div class="components-lc-hooks__events">
        <span ref="events">Events:</span>
        <span
          class="components-lc-hooks__event"
          v-for="event in events"
          :key="event"
          >{{ event }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IData {
  events: string[];
  value: number;
}

const getEventText = (e: string) => {
  return "Event fired: " + e;
};

export default defineComponent({
  data(): IData {
    return {
      events: [],
      value: 0,
    } as IData;
  },
  beforeCreate() {
    try {
      this.events.unshift(getEventText("beforeCreate"));
    } catch (e) {
      console.error("'data' section is not available in this hook!", e);
    }
  },
  created() {
    this.events.unshift(getEventText("created"));
  },
  beforeMount() {
    this.events.unshift(getEventText("beforeMount"));
    try {
      (this.$refs["events"] as HTMLSpanElement).setAttribute(
        "style",
        "background-color: blue"
      );
    } catch (e) {
      console.error("You cannot access element references yet!", e);
    }
  },
  mounted() {
    this.events.unshift(getEventText("mounted"));
    (this.$refs["events"] as HTMLSpanElement).setAttribute(
      "style",
      "background-color: blue"
    );
  },
  beforeUpdate() {
    // this.events.unshift(getEventText("beforeUpdate"));
    console.log(getEventText("beforeUpdate"));
  },
  updated() {
    // this.events.unshift(getEventText("updated"));
    console.log(getEventText("updated"));
  },
  beforeUnmount() {
    this.events.unshift(getEventText("beforeUnmount"));
  },
  unmounted() {
    this.events.unshift(getEventText("unmountedj"));
  },
});
</script>

<style lang="scss" scoped>
.components-lc-hooks {
  display: flex;
}

.components-lc-hooks__hook-display {
  display: flex;
  flex-direction: column;

  > div {
    margin: 2rem;
  }
}

.components-lc-hooks__events {
  display: flex;
  flex-direction: column;
}

.components-lc-hooks__event {
  margin: 1rem;
}
</style>
