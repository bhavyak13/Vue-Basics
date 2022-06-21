<template>
  <h1>Reaction Time : {{ score }} ms</h1>
  {{ reactionStatus }}
  <!-- {{ reactionStatusComputer }} -->
</template>
<script>
export default {
  props: ["score"],
  data() {
    return {
      reactionStatus: null,
    };
  },
  mounted() {
    if (this.score < 250) this.reactionStatus = "Godilke Fingers";
    else if (this.score < 400) this.reactionStatus = "Rapid Reflex";
    else this.reactionStatus = "Snail Pace..";
  },
  //   computed: {
  //     reactionStatusComputer() {
  //       if (this.score < 250) return (this.reactionStatus = "Godilke Fingers");
  //       else if (this.score < 400) return (this.reactionStatus = "Rapid Reflex");
  //       return (this.reactionStatus = "Snail Pace..");
  //     },
  //   },
};
</script>