<template>
  <div class="subcategory">
    <h3 :id="section.name">{{ section.name }}</h3>
    <p v-html="section.text"></p>
    <div v-if="section.assets">
    </div>
    <div v-if="section.components">
      <div :key="index" v-for="(component, index) in section.components">
          <component v-bind:is="component.name" v-bind:component="component"></component>
      </div>
    </div>

  </div>
</template>

<script>
import PaletteContainer from "./../Colors/PaletteContainer.vue";
import JaugeAnim from "./../Anim/JaugeAnim.vue";
import TypoHeader from "./../Typo/TypoHeader.vue";
import TypoContent from "./../Typo/TypoContent.vue";

export default {
    name: "SubCategory",
    components: {
        PaletteContainer,
        JaugeAnim,
        TypoHeader,
        TypoContent
    },
    props: {
    section: Object,
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
};
</script>

<style scoped>

.subcategory {
    margin-top: 80px;
}

</style>
