<template>
  <div v-if="open">
    <Modal :toggleShowModel="toggleOpen" @close="toggleOpen">
      <template v-slot:links>This is links Template</template>
      this is Modal no. 2 Context
    </Modal>
  </div>
  <button @click="toggleOpen">Click to Open Modal 2</button>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>