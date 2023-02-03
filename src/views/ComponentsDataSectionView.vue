<template>
  <div>
    <!-- String interpolation -->
    <span>Hello {{ text }}!</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IData {
  text: string;
}

export default defineComponent({
  data(): IData {
    return {
      text: "World",
    };
  },
});
</script>
