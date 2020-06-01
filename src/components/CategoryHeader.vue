<template>
<div class="category-header">
  <router-link to="/">
  <img src="./../assets/logo.png" alt="" id="cat-logo">
  <h1>Yuka <span class="light">Design System</span></h1>

  </router-link>
</div>
</template>

<script>
export default {
    name: "CategoryHeader",
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.category-header a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.category-header a h1 {
  font-weight: 900;
}

.category-header a h1 .light {
  font-weight: 300;
}


.category-header a #cat-logo {
  width: 40px;
  margin-right: 10px;

}

.category-header a:hover #cat-logo {
    animation: tremble 300ms infinite;
}

</style>