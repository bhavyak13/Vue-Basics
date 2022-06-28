<template v-if="job">
  <div v-if="job">
    <h1>welcome user</h1>
    <!-- <p>user id : {{ $route.params.id }}</p> -->
    <p>user id : {{ job.id }}</p>
    <p>{{ job.detail }}</p>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  async mounted() {
    const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
    const data = await response.json();
    this.job = data;
  },
};
</script>