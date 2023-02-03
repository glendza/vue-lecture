<template>
  <div class="block">
    <hr />
    <span>Block ID: {{ block.id }}</span>
    <br />
    <span>Block Index: {{ index }}</span>
    <br />
    <button type="button" @click="$emit('removeBlock')">Remove block!</button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IBlock } from "../types";

export default defineComponent({
  props: {
    block: {
      type: Object as PropType<IBlock>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>
