<template>
  <div class="subcategory">
    <h5 :id="section.name">{{ section.name }}</h5>
    <p v-html="section.text"></p>
    <div v-if="section.components">
      <div :key="index" v-for="(component, index) in section.components">
          <component v-bind:is="component.name" v-bind:component="component"></component>
      </div>
    </div>

  </div>
</template>

<script>
import PaletteContainer from "./PaletteContainer.vue";

export default {
    name: "SubCategory",
    components: {
        PaletteContainer
    },
    props: {
    section: Object,
  },
};
</script>

<style scoped>

.subcategory {
    margin-top: 40px;
}

.subcategory h5 {
    font-weight: 300;
}

</style>
