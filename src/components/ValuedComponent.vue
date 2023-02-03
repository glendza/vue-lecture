<template>
  <div class="valued-component">
    <span>Value:</span>
    <input type="number" :value="modelValue" @input="onModelChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    onModelChange(e: Event) {
      this.$emit("update:modelValue", (e.target as HTMLInputElement)?.value);
    },
  },
});
</script>

<style lang="scss" scoped>
.valued-component {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 2rem;
  padding: 2rem;
}
</style>
