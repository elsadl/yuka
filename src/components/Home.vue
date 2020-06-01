<template>
  <div>
    <mq-layout mq="md+">
    <header-top></header-top>
    </mq-layout>
        <mq-layout mq="sm">
    <header-mobile></header-mobile>
    </mq-layout>
    <main-grid></main-grid>
    <values></values>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue"
import HeaderMobile from "./HeaderMobile.vue"
import MainGrid from "./MainGrid.vue"
import Values from "./Values.vue"


export default {
    name: "Home",
    components: {
        HeaderTop,
        HeaderMobile,
        MainGrid,
        Values
    }

}
</script>

<style>

</style>