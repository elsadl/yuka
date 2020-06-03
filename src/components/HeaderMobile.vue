<template>
  <div class="header-mobile">
    <div class="logo-container">
  <img src="./../assets/logo.png" alt="" id="mobile-logo">
  <h1>Yuka <span class="light">Design System</span></h1>
    </div>
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

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 20px;
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




</style>
