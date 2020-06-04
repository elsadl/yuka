<template>
  <div id="app">
    <div class="page">
        <router-view></router-view>
    </div>
    <credits></credits>
  </div>
</template>

<script>
import Credits from "./components/Credits.vue";

export default {
  name: "App",
  components: {
    Credits,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

:root {
  box-sizing: border-box;
  --default: #151515;
  --yuka-orange: #ff9101;
  --yuka-green: #59d67d;
  --pastel: #f0faf1;
  --prev-pastel: #f2ffe4;
}

body {
  margin: 0;
  color: var(--default);
  font-family: "Nunito", sans-serif;
  font-size: 18px;
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
    font-size: 48px;
    font-weight: 800;
}

h3 {
    font-size: 36px;
}

h5 {
    font-size: 24px;
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

.category {
  padding: 40px;
}

.light {
  font-weight: 300;
}

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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
