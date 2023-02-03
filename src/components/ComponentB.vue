<template>
  <div class="component-B">
    <span>Computed (squared) value: {{ squaredValue }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    squaredValue() {
      return this.value * this.value;
    },
  },
});
</script>
