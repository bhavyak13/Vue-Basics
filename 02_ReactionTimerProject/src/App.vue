<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResults" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";
export default {
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.showResults = false;
      this.delay = Math.floor(Math.random() * 5000 + 2000);
    },
    endGame(value) {
      this.score = value;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
