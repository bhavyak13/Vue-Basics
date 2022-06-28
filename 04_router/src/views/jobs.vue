<template>
  <h1>this is jobs template!</h1>
  <ul>
    <li v-for="job in jobs" :key="job.name">
      <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
        {{ job.name }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3000/jobs");
    const data = await response.json();
    this.jobs = data;
    console.log(data);
  },
};
</script>
<style scoped>
li {
  font-size: xx-large;
}
</style>