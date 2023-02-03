<template>
  <div class="binding">
    <ValuedComponent v-model="value" />
    <ValuedComponent
      :modelValue="value"
      @update:modelValue="(v) => (value = v)"
    />
    <span>Value is mutated to: {{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ValuedComponent from "../components/ValuedComponent.vue";

interface IData {
  value: number;
}

export default defineComponent({
  components: { ValuedComponent },
  data(): IData {
    return {
      value: 6,
    };
  },
  methods: {
    setValue(v: unknown) {
      console.log("value is: ", v);
    },
  },
});
</script>
