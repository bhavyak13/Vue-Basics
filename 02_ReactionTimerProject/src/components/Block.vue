<template>
  <div class="box" v-if="showBox" @click="stopTimer">
    <h2>Click Me</h2>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBox: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      // console.log(this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    // console.log("Component Mounted");
    setTimeout(() => {
      this.showBox = true;
      this.startTimer();
    }, this.delay);
  },
  unmounted() {
    // console.log('compponent unmounted');
  },
};
</script>


<style>
.box {
  margin: auto;
  width: 60%;
  background-color: #000;
  color: #ffe;
  margin-top: 3rem;
  padding: 8rem;
}
</style>