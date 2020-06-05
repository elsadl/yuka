<template>
  <div>
    <div :key="index" v-for="(url, index) in component.props.urls">
      <img :src="`${publicPath}${url}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    component: Object,
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>
