<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" ref="name" />
    <button @click="clickHandler">click me</button>
    <Modal />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      title: "My first Vue Project!",
    };
  },
  methods: {
    clickHandler(e) {
      e.preventDefault();
      // console.log(this.$refs.name.value);
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
