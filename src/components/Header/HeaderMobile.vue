<template>
  <div class="header-mobile">
      <router-link to="/">
    <div class="logo-container">
  <img src="./../../assets/logo.png" alt="" id="mobile-logo">
  <h1>Yuka <span class="light">Design System</span></h1>
    </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: "HeaderMobile"
}
</script>

<style scoped>

.header-mobile {
    position: relative;
}


.header-mobile a {
  text-decoration: none;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  text-decoration: none;
  padding-right: 60px;
}


.logo-container h1 {
  font-weight: 900;
  font-family: "Nunito", sans-serif;
}

.logo-container h1 .light {
  font-weight: 300;
}

.logo-container #mobile-logo {
  width: 40px;
  margin-right: 10px;
}


.header-mobile a:hover #mobile-logo {
    animation: tremble 300ms infinite;
}

@media screen and (max-width: 500px) {
  .logo-container h1 {
  font-size: 1.6em;
}
}



</style>
