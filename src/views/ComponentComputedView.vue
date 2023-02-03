<template>
  <div class="components-intro">
    <ComponentA :value="5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentA from "../components/ComponentB.vue";

export default defineComponent({
  components: { ComponentA },
});
</script>
