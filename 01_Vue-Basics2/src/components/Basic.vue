<template>
  <h1>Vue js Docs</h1>
  <p>{{ rawHtml }}</p>
  <p><span v-html="rawHtml"></span></p>
  <h4 :id="id">Id of this h4 is dynamic</h4>
  <button :disabled="isButtonDisabled">Click me</button>
  <button v-on:click="toggleDisable">
    Click this to toggle Parargaph visibilty
  </button>
  <div v-bind="objectOfAttributes">
    This is example of dynamically binding multiple attributes
  </div>
  <p v-if="isParaghraphVisible">
    In Vue templates, JavaScript expressions can be used in the following
    positions: Inside text interpolations (mustaches), In the attribute value of
    any Vue directives (special attributes that start with v-)
  </p>
  <a v-bind:[attname]="url">{{ attname }}</a>
  <img :src="src" />
</template>
<script>
export default {
  data() {
    return {
      attname: "href",
      rawHtml: '<span style="color: red">This should be red.</span>',
      id: "id786",
      isButtonDisabled: true,
      objectOfAttributes: {
        id: "id786",
        class: "Box",
      },
      src: "https://vuejs.org/assets/directive.69c37117.png",
      url: "https://bhavyak13.github.io/portfolio/",
    };
  },
  methods: {
    //you can declare arrow functions here but 'this' propewrty will not be avialable for u :(
    toggleDisable() {
      this.isButtonDisabled = !this.isButtonDisabled;
    },
  },
  computed: {
    isParaghraphVisible() {
      return this.isButtonDisabled;
    },
  },
};
</script>
<style>
#id786 {
  color: blue;
}
</style>