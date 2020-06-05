<template>
  <div class="nav-mobile-container">
    <button
      v-on:click="toggleMenu"
      :class="[displayNav ? 'open-menu-btn' : 'closed-menu-btn', 'menu-btn']"
    >
      <span>←</span>
    </button>

    <div
      :class="[
        displayNav ? 'open-nav-mobile' : 'closed-nav-mobile',
        'nav-mobile',
      ]"
    >
      <ul>
        <li>
          <router-link
            v-on:click.native="hideMenu"
            class="nav-mobile-link"
            to="/"
            >Accueil</router-link
          >
        </li>
        <li
          class="nav-mobile-li"
          :key="index"
          v-for="(cat, index) in categories"
        >
          <router-link
            v-on:click.native="hideMenu"
            class="nav-mobile-link"
            :to="cat.url"
            >{{ cat.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import categories from "./../assets/data/categories";

export default {
  name: "NavMobile",
  data() {
    return {
      categories: categories,
      displayNav: false,
    };
  },
  methods: {
    toggleMenu: function() {
      if (this.displayNav) {
        this.displayNav = false;
      } else {
        this.displayNav = true;
      }
      return this.displayNav;
    },
    hideMenu: function() {
      this.displayNav = false;
      return this.displayNav;
    },
  },
};
</script>

<style lang="less" scoped>
.menu-btn {
  position: fixed;
  top: 22px;
  right: 10px;
  z-index: 110;
  padding: 20px;
  background: none;
  border: none;
  font-size: 2em;
  transition: all 200ms ease-out;

  cursor: pointer;
  &:focus {
    outline: none;
    transform: translateY(1px);
  }
  &.open-menu-btn {
    transform: rotate(-180deg);
  }
}

.nav-mobile {
  height: 100vh;
  width: 80vw;
  margin: 0;
  border-top-left-radius: 5em;
  border-bottom-left-radius: 5em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 100;
  background-color: white;
  position: fixed;
  transition: all 500ms ease-out;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    padding: 60px 0;
    height: 70vh;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: var(--header-sm);
    font-family: "Manrope", sans-serif;
    a {
      text-decoration: none;
    position: relative;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 16px;
    position: absolute;
    left: 0;
    right: 0;
    top: 60%;
        background-color: var(--yuka-orange);
        opacity: 0.4;
        z-index: -1;
      }
    }
  }

  &.closed-nav-mobile {
    right: -100vw;
  }

  &.open-nav-mobile {
    right: 0;
    .menu-btn {
      transform: rotate(60deg);
    }
  }
}
</style>
