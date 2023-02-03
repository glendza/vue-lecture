<template>
  <div class="conditional-rendering">
    <div>
      <span>Show: </span>
      <input type="checkbox" v-model="show" />
    </div>
    <div v-if="show">Now you see me</div>
    <div v-else>Now you don't</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: true,
    };
  },
});
</script>
