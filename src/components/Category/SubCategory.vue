<template>
  <div class="subcategory">
    <h3 :id="section.name">{{ section.name }}</h3>
    <p v-html="section.text"></p>
    <div v-if="section.assets"></div>
    <div v-if="section.components">
      <div :key="index" v-for="(component, index) in section.components">
        <component
          v-bind:is="component.name"
          v-bind:component="component"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import PaletteContainer from "./../Colors/PaletteContainer.vue";
import JaugeAnim from "./../Anim/JaugeAnim.vue";
import TypoHeader from "./../Typo/TypoHeader.vue";
import TypoContent from "./../Typo/TypoContent.vue";
import Images from "./../Images.vue";

export default {
  name: "SubCategory",
  components: {
    PaletteContainer,
    JaugeAnim,
    TypoHeader,
    TypoContent,
    Images
  },
  props: {
    section: Object,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="less">
.subcategory {
  margin-top: 40px;
}

@media screen and (min-width: 1250px) {
  .subcategory {
    margin-top: 80px;
  }
}

.typo-content {
  margin-top: 60px;
}

.typo-content-element {
  display: grid;
  grid-template-columns: minmax(80px, 140px) minmax(0, 1fr);
  grid-gap: 20px;
  align-items: start;
  padding: 60px;
  border-bottom: 1px solid var(--yuka-orange);
  &:first-child {
    border-top: 1px solid var(--yuka-orange);
  }

  &.medium {
    .example {
      padding-right: 20%;
    }
  }

  &.small {
    .example {
      padding-right: 40%;
    }
  }

  .left {
    color: var(--yuka-orange);
    width: 80px;
    p {
      font-size: var(--text-sm);
      font-weight: 300;
    }
  }

  h6 {
    font-family: "Manrope", sans-serif;
    font-size: 1.2em;
    font-weight: 500;
  }

  p {
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 730px) {
  .typo-content-element {
    grid-template-columns: minmax(0, 1fr);
    padding: 30px;

    &.medium {
      .example {
        padding-right: 0;
      }
    }

    &.small {
      .example {
        padding-right: 0;
      }
    }
  }
}
</style>
