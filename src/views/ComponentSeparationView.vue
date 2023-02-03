<template>
  <div class="conditional-rendering">
    <div>
      <button type="button" @click="addBlock">Add block!</button>
    </div>
    <Block
      v-for="(block, index) in blocks"
      :key="block.id"
      :block="block"
      :index="index"
      @removeBlock="removeBlock(block)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheBlock from "../components/TheBlock.vue";
import { IBlock } from "../types";

interface IData {
  blocks: IBlock[];
}

export default defineComponent({
  components: { Block: TheBlock },
  data(): IData {
    return {
      blocks: [],
    };
  },
  methods: {
    addBlock() {
      const nextId = this.blocks.length
        ? Math.max(...this.blocks.map((b: IBlock) => b.id)) + 1
        : 0;
      this.blocks.push({ id: nextId });
    },
    removeBlock(block: IBlock) {
      this.blocks = this.blocks.filter((b: IBlock) => b != block);
    },
  },
});
</script>
