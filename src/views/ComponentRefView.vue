<template>
  <div class="components-refs">
    <h1 ref="changing-text">Hello</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    setInterval(() => {
      const ref = this.$refs["changing-text"] as HTMLHeadElement;
      if (ref.innerText === "Hello") {
        ref.innerText = "World!";
      } else {
        ref.innerText = "Hello";
      }
    }, 500);
  },
});
</script>
