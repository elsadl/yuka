<template>
  <div class="category-nav">
    <ul>
      <li class="category-li" :key="index" v-for="(cat, index) in categories">
        <router-link class="category-link" :to="cat.url">{{ cat.name }}</router-link>
        <scrollactive class="sub-category-nav">
          <li class="sub-category-li" :key="i" v-for="(subcat, i) in cat.subSections">
              <a class="sub-category-link scrollactive-item" :href="'#' + subcat.name">{{ subcat.name }}</a>
          </li>
        </scrollactive>
      </li>
    </ul>
  </div>
</template>

<script>
import categories from "./../assets/data/categories";

export default {
  name: "CategoryNav",
  data() {
    return {
      categories: categories,
    };
  },
};
</script>

<style scoped>

.category-nav {
    position: sticky;
}

ul .category-li + .category-li .category-link {
  margin-top: 0.5em;
}

ul li a {
  text-decoration: none;
  display: inline-block;
  position: relative;
}

ul .category-li .category-link.router-link-active::after {
  content: "";
  display: block;
  width: 103%;
  height: 2px;
  background-color: var(--default);
  transition: all 400ms ease-in-out;
}

ul .category-li .category-link::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: var(--default);
  transition: all 400ms ease-in-out;
}

ul .category-li .category-link:hover::after {
  width: 103%;
}

ul li .sub-category-li {
    font-weight: 200;
    padding-left: 1em;
    margin-top: 0em;
    height: 0em;
    overflow: hidden;
    transition: all 600ms ease-in-out;
}

ul .category-li .category-link + .sub-category-nav {
  margin-top: 0em;
    transition: all 600ms ease-in-out;
}

ul .category-li .category-link.router-link-active + .sub-category-nav {
  margin-top: 1em;
    transition: all 600ms ease-in-out;
}

ul li .category-link.router-link-active + .sub-category-nav .sub-category-li {
    margin-top: 0.2em;
    height: 2em;
    transition: all 600ms ease-in-out;
}

.scrollactive-item:hover::before {
    transition: all 200ms ease-in-out;
    content: "●";
    display: inline-block;
    position:absolute;
    color: var(--yuka-orange);
    transform: translateX(-1em);
    opacity: 1;
}

.scrollactive-item::before {
    transition: all 200ms ease-in-out;
    content: "●";
    display: inline-block;
    position:absolute;
    color: var(--yuka-orange);
    transform: translateX(-1em);
    opacity: 0;
}

.scrollactive-item.is-active::before {
    opacity: 1;
}

</style>
