<template>
  <div class="category-content">
    <h1>{{ currentCat.name }}</h1>
    <p class="text-intro">{{ currentCat.intro }}</p>
    <div v-if="currentCat.subSections">
      <div class="subcat" :key="index" v-for="(section, index) in currentCat.subSections">
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

<style scoped>

h1 {
  margin-bottom: 40px;
}

.subcat:last-child {
  margin-bottom: 100px;
}

.category-content .text-intro {
  font-size: var(--text-lg);
}

@media screen and (min-width: 1000px) {
  .subcat:last-child {
  margin-bottom: 200px;
}
}

</style>
