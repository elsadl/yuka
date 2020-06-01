<template>
  <div class="category-content">
    <h3>{{ currentCat.name }}</h3>
    <p>{{ currentCat.intro }}</p>
    <div v-if="currentCat.subSections">
      <div :key="index" v-for="(section, index) in currentCat.subSections">
        <sub-category v-bind:section="section"></sub-category>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategory from "./SubCategory.vue";

export default {
  name: "CategoryContent",
  components: {
    SubCategory,
  },
  props: {
    currentCat: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
h3 {
  font-size: 2.4em;
  font-weight: 800;
}

h5 {
  font-size: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
