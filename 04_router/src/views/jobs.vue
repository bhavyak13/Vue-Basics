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
      jobs: [
        { id: "1", name: "job1" },
        { id: "2", name: "job2" },
        { id: "3", name: "job3" },
      ],
    };
  },
};
</script>
<style scoped>
li {
  font-size: xx-large;
}
</style>