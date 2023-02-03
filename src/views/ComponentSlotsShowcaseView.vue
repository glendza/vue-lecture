<template>
  <div class="conditional-rendering">
    <div>
      <button type="button" @click="addCard">Add card!</button>
    </div>
    <TheCard
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      @removeCard="removeCard(card)"
    >
      {{ card.content }}
      <template #footer>
        {{ card.footer }}
      </template>
    </TheCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCard from "../components/TheCard.vue";
import { ICard } from "../types";

interface IData {
  cards: ICard[];
}

export default defineComponent({
  components: { TheCard },
  data(): IData {
    return {
      cards: [],
    };
  },
  methods: {
    addCard() {
      const nextId = this.cards.length
        ? Math.max(...this.cards.map((c: ICard) => c.id)) + 1
        : 0;
      this.cards.push({
        id: nextId,
        title: `Card ${nextId}`,
        content: `Some content for card ${nextId} bla bla bla`,
        footer: `Footer for ${nextId}`,
      });
    },
    removeCard(card: ICard) {
      this.cards = this.cards.filter((c: ICard) => c != card);
    },
  },
});
</script>
