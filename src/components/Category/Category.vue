<template>
<div class="category">
    <category-header></category-header>
    <main>
        <category-nav></category-nav>
        <category-content v-bind:currentCat="currentCat"></category-content>
    </main>
</div>
</template>

<script>
import categories from "./../../assets/data/categories"
import CategoryContent from "./CategoryContent.vue"
import CategoryNav from "./CategoryNav.vue"
import CategoryHeader from "./CategoryHeader.vue"

export default {
    name: "Category",
    components: {
        CategoryContent,
        CategoryNav,
        CategoryHeader
    },
    data() {
        return {
            categories: categories,
            index: "",
            currentCat: "",
        }
    },
    created(){
        this.index = categories.findIndex(el => {
            return el.url == this.$route.params.cat;
        });
        console.log(this.index);
        console.log(this.categories[this.index]);
        this.currentCat = this.categories[this.index];
        return this.currentCat;
    },
    watch: {
    "$route.fullPath": function() {
        this.index = categories.findIndex(el => {
            return el.url == this.$route.params.cat;
        });
        console.log(this.index);
        console.log(this.categories[this.index]);
        this.currentCat = this.categories[this.index];
        return this.currentCat;
    },
  },
}
</script>

<style scoped>
main {
    padding: 40px 0;
    max-width: 1600px;
    margin: 0 auto;
}

    .category-header {
        max-width: 1600px;
        margin: 0 auto;
    }

main >>> .category-content {
  padding: 20px 0px;
}


@media screen and (min-width: 800px) {

main {
    padding: 60px;
    display: flex;
    position: relative;
}

main >>> .category-content {
  padding: 0 20px;
}

main >>> .category-nav {
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow:
   0;
   position: sticky;
   top: 20px;
       align-self: flex-start;
}

}
</style>