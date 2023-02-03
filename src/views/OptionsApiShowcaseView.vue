<template>
  <div class="options-api-view">
    <ComponentA>
      <!-- Goes to the main, unnamed slot -->
      <ComponentB :counterValue="counterValue" />
      <!-- We want the following content to appear under "title" -->
      <template #title>Some fancy title</template>
      <!-- We don't specify content for slot named "more", -->
      <!-- so it's default content gets shown. -->
    </ComponentA>
    <div class="text">
      <span>This text should not be bolded</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentA from "../components/options-api/ComponentA.vue";
import ComponentB from "../components/options-api/ComponentB.vue";

interface ComponentBData {
  counterValue: number;
  intervalHandle: number | null;
}

export default defineComponent({
  components: {
    ComponentA,
    ComponentB,
  },
  data() {
    return {
      counterValue: 0,
      intervalHandle: null,
    } as ComponentBData;
  },
  mounted() {
    this.intervalHandle = setInterval(() => {
      this.counterValue += 1;
    }, 1000);
  },
});
</script>
