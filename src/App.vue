<template>
  <div id="app">
          <mq-layout :mq="['sm', 'md']">

      <nav-mobile></nav-mobile>
          </mq-layout>
    <div class="page">
        <router-view></router-view>
    </div>
    <credits></credits>
  </div>
</template>

<script>
import Credits from "./components/Credits.vue";
import NavMobile from "./components/NavMobile.vue"


export default {
  name: "App",
  components: {
    Credits,
    NavMobile
  },
};
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

@min730: ~"(min-width: 730px)";
@max730: ~"(max-width: 730px)";
@min1000: ~"(min-width: 1000px)";
@max1000: ~"(max-width: 1000px)";
@min1250: ~"(min-width: 1250px)";
@max1250: ~"(max-width: 1250px)";

* {
      box-sizing: border-box;
}

:root {
  --default: #151515;
  --yuka-orange: #ff9101;
  --yuka-green: #59d67d;
  --pastel: #f0faf1;
  --prev-pastel: #f2ffe4;
  --font-size-base: 1em;
  --font-scale-ratio: 1.2;
  --text-lg: calc(1em * var(--font-scale-ratio) * var(--font-scale-ratio));
  --text-md: calc(1em * var(--font-scale-ratio));
  --text-sm: 1em;
  --header-lg: calc(1em * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio));
  --header-md: calc(1em * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio));
  --header-sm: calc(1em * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio));

    @media screen and @min1000 {
  --font-size-base: 1.125em;
  }

    @media screen and @min1250 {
  --font-size-base: 1.25em;
  }

}

body {
  margin: 0;
  color: var(--default);
  font-family: "Nunito", sans-serif;
  font-size: var(--font-size-base);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
    font-weight: 500;
    font-family: "Manrope", sans-serif;
}

h1 {
    font-size: var(--header-lg);
    font-weight: 800;
}

h3 {
    font-size: var(--header-md);
}

h5 {
    font-size: var(--header-sm);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: var(--default);
}

.page {
  min-height: 100vh;
  margin-bottom: 30vh;
  background-color: white;
}

.light {
  font-weight: 300;
}



@keyframes tremble {
  0% {
    transform: rotate(6deg);
  }
  50% {
    transform: rotate(-6deg);
  }
  100% {
    transform: rotate(6deg);
  }
}
</style>
