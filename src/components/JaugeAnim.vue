<template>
<div>
    <div class="jauge-container">
          <video class="jauge" type="video/mp4" loop autoplay v-bind:src="`${publicPath}${component.src}`"></video>
          <p>{{component.text}}</p>
  </div>

</div>

</template>

<script>
export default {
  name: "JaugeAnim",
    props: {
    component: Object,
  },
    data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }


}
</script>

<style scoped>
.jauge-container {
    width: 100%;
    display: flex;
    align-items: center;
}

.jauge {
    width: 300px;
}

</style>