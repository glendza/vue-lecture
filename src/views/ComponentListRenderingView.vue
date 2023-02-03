<template>
  <div class="conditional-rendering">
    <div>
      <button type="button" @click="addBlock">Add block!</button>
    </div>
    <div>
      <div v-for="(block, index) in blocks" :key="block.id">
        <hr />
        <span>Block ID: {{ block.id }}</span>
        <br />
        <span>Block Index: {{ index }}</span>
        <br />
        <button type="button" @click="removeBlock(block)">Remove block!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IBlock {
  id: number;
}

interface IData {
  blocks: IBlock[];
}

export default defineComponent({
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
