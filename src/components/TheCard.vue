<template>
  <div class="card">
    <div class="card__header">
      <span>{{ title }}</span>
      <button type="button" @click="$emit('removeCard')">X</button>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  padding: 1rem;
  border: 1px solid;
  margin: 2rem;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.card__header {
  display: flex;
  justify-content: space-between;
}

.card__body {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.card__footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid;
}
</style>
