<template>
  <h1>welcome user</h1>
  <!-- <p>user id : {{ $route.params.id }}</p> -->
  <p>user id : {{ id }}</p>
</template>
<script>
export default {
  props:['id'],
  data() {
    return {};
  },
};
</script>