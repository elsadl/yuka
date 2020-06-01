<template>
  <div class="credits">
    <a href="https://yuka.io/">yuka.io</a>
    <p>un projet mené par<br /><span class=semi-bold>Marie Majou</span> et <span class=semi-bold>Elsa Delmas</span> <br />Gobelins, 2020</p>
      <img src="./../assets/logo.png" alt="" id="credits-logo">
  </div>
</template>

<script>
export default {
  name: "Credits",
};
</script>

<style scoped>
.credits {
  height: 30vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #e2f5e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  text-align: center;
}

.credits a {
  color: var(--yuka-green);
  font-weight: 700;
  font-size: 1.2em;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.credits a:hover {
  opacity: 0.6;
}

.credits p {
  font-weight: 200;
}

.credits .semi-bold {
  font-weight: 500;
}

.credits #credits-logo {
  width: 30px;
}

</style>
