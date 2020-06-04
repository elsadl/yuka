<template>
  <div class="header-top">
    <div class="header-container">
      <div class="header-text">
        <div class="header-flex">
        <div class="header-logo-container"><img id="header-logo" src="./../../assets/logo.png" alt="" />
          </div>
        <h1>Yuka,</h1>
        </div>
        <h1 class="light">Aider à faire les bons choix.</h1>
      </div>
      <div class="header-mockup-container">
        <img id="header-mockup" src="./../../assets/mockup.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style>
.header-top {
  background-color: var(--pastel);
}

.header-container {
  height: 220vh;
  position: relative;
  max-width: 850px;
  max-height: 1500px;
  margin: 0 auto;
}

.header-container #header-logo {
  width: 80px;
  padding: 10px 20px;
}

.header-top .header-text {
  padding: 100px;
  max-width: 600px;
  position: sticky;
  top: 10vh;
}

.header-top .header-text .header-flex {
  display: flex;
  align-items: flex-end;
  transform: translateX(-120px);
}

.header-top .header-text .header-flex h1 {
  color: var(--yuka-green);
  font-weight: 900;
      font-family: "Nunito", sans-serif;
      font-size: 74px;

}

.header-top .header-text .light {
  line-height: 0.9em;
        font-size: 74px;

}

.header-mockup-container {
  position: absolute;
  right: 40px;
}

#header-mockup {
  width: 460px;
}

@media screen and (max-width: 1000px) {
.header-top .header-text {
  font-size: 2.4em;
  padding: 100px;
  position: sticky;
  top: 10vh;
  margin-left: 20px;
}

}

@media screen and (min-width: 1400px) {
.header-container {
  height: 220vh;
  position: relative;
  max-width: 1000px;
  max-height: 1800px;
  margin: 0 auto;
}

.header-container #header-logo {
  width: 110px;
  padding: 10px 20px;
}

.header-top .header-text {
  padding: 100px;
  max-width: 600px;
  position: sticky;
  top: 10vh;
}

.header-top .header-text .header-flex {
  display: flex;
  align-items: flex-end;
  transform: translateX(-120px);
}

.header-top .header-text .header-flex h1 {
  color: var(--yuka-green);
  font-weight: 900;
      font-family: "Nunito", sans-serif;
      font-size: 96px;

}

.header-top .header-text .light {
  line-height: 0.9em;
      font-size: 96px;

}

.header-mockup-container {
  position: absolute;
  right: 40px;
}

#header-mockup {
  width: 460px;
}


}

</style>
