<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" ref="name" />
    <button @click="clickHandler">click me</button>
    <!-- <Basic /> -->
    <br />
    <p>hi bro</p>
    <Challenge />
    <div v-if="showModal">
      <Modal :toggleShowModel="toggleShowModal" @close="toggleShowModal">
        <template v-slot:links>
          this is action slot
          <a href="#">this is a link</a>
        </template>
        <!-- <p :class="{ sale: theme === 'sale' }"> -->
        <p>
          hiiiiiiii <br />
          This is Modal
        </p>
      </Modal>
    </div>
    <button @click="toggleShowModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Basic from "./components/Basic.vue";
import Challenge from "./components/Challenge.vue";
export default {
  components: { Modal, Basic, Challenge },
  data() {
    return {
      title: "My first Vue Project!",
      theme: "sale",
      showModal: false,
    };
  },
  methods: {
    clickHandler(e) {
      e.preventDefault();
    },
    toggleShowModal() {
      this.showModal = !this.showModal;
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
