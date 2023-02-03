<template>
  <div class="options-api-view">
    <ComponentA>
      <!-- Goes to the main, unnamed slot -->
      <ComponentB />
      <!-- We want the following content to appear under "title" -->
      <template #title>Some fancy title</template>
      <!-- We don't specify content for slot named "more", -->
      <!-- so it's default content gets shown. -->
    </ComponentA>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentA from "../components/options-api/ComponentA.vue";
import ComponentB from "../components/options-api/ComponentB.vue";
import { onBeforeMount, onMounted } from "vue";

export default defineComponent({
  components: {
    ComponentA,
    ComponentB,
  },
  setup() {
    onBeforeMount(() => {
      // Do something before the component is mounted
    });

    onMounted(() => {
      // Do something after the component's been mounted
    });
  },
});
</script>
