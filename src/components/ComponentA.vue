<template>
  <div class="component-A">
    <span>Passed prop: {{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
