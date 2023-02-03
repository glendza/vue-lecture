<template>
  <div class="components-intro">
    <ComponentA text="Some super fancy text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ComponentA from "../components/ComponentA.vue";

export default defineComponent({
  components: { ComponentA },
});
</script>
