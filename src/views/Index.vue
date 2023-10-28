<script setup>
import Navbar from '@/components/Navbar.vue'
import Trust from '@/components/Trust.vue'
import Search from '@/components/Search.vue'
import News from '@/components/News.vue'
import Footer from '@/components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<body>
    <Navbar/>
    <Trust/>
    <Search/>
    <News/>
    <Footer/>
  </body>
</template>
<style>
* {
    padding: 0;
    margin: 0;
}

body {
    font-family: "Montserrat-Regular";
    color: #fff;
    background: linear-gradient(#55258d,70%, #150031);
    width: 100%;
    height: 100%;
}
</style>
