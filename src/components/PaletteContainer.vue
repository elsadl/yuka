<template>

  <div class="palette-container">
      <div class="palette-grid">
                <div :key="index" v-for="(color, index) in component.props.colors">
        <color-palette v-bind:color="color"></color-palette>
      </div>
      </div>
  </div>

</template>

<script>
import ColorPalette from "./ColorPalette.vue";

export default {
  name: "PaletteContainer",
    props: {
    component: Object,
  },
  components: {
    ColorPalette,
  },
};
</script>

<style scoped>

.palette-grid {
    margin: 0 -20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

</style>
