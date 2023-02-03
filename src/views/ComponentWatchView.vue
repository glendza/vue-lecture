<template>
  <div class="components-watch">
    <input type="number" v-model="model" />
    <br />
    <br />
    <br />
    <span>The value changed from {{ oldValue }} to {{ newValue }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IData {
  model: number;
  oldValue: number;
  newValue: number; // Same as "model", but hey
}

export default defineComponent({
  data(): IData {
    return {
      model: 0,
      oldValue: 0,
      newValue: 0,
    };
  },
  watch: {
    model(newValue: number, oldValue: number) {
      this.newValue = newValue;
      this.oldValue = oldValue;
    },
  },
});
</script>
