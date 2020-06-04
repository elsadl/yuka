<template>
  <div class="main-grid">
    <div class="grid-container">
      <h1>Un design system pensé pour les utilisateurs.</h1>
      <div class="grid-element" :key="index" v-for="(cat, index) in categories">
        <div class="grid-element-flex">
          <div class="grid-element-content">
            <router-link :to="cat.url">
              <h3>{{ cat.name }}</h3>
              <span class="arrow">→</span>
            </router-link>
            <p>{{ cat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from "./../assets/data/categories";

export default {
  name: "MainGrid",
  data() {
    return {
      categories: categories,
    };
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  margin: 100px auto;
  width: 90vw;
  max-width: 1600px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 100px;
  align-items: end;
}

.grid-container h1 {
    grid-column: 1 / span 2;
}

.grid-element {
  position: relative;
}


.grid-element-content a {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-decoration: none;
}

.grid-element-content a span {
  display: inline-block;
  font-size: 2em;
  font-weight: 600;
  margin: 0;
}

.grid-element-content a span:first-child {
    padding-right: 20px;
}

.grid-element-content a .arrow {
  transform: translateX(-40px);
  opacity: 0;
  transition: all 500ms ease-in-out;
}

.grid-element-content a:hover .arrow {
  transform: translateX(0px);
  opacity: 1;
}

.grid-element-content a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -.5rem;
    right: 0;
    height: .4rem;
    background: var(--default);
    transform: scaleY(0.5);
    transform-origin: bottom;
    transition: transform 1s cubic-bezier(0,.65,0,1);
    opacity: 1;
}

.grid-element-content a:hover::after {
    transform: scaleY(1);
}




@media screen and (max-width: 900px) {
  .grid-container {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

@media screen and (max-width: 730px) {
  .grid-container {
    grid-gap: 60px;
    margin: 30px auto;
  }
}

@media screen and (max-width: 600px) {
  .grid-container {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 500px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }


.grid-container h1 {
    font-size: 2.4em;
}

  .grid-container .grid-element {
    margin: 30px 0;
  }
}
</style>
