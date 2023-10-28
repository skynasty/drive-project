<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <router-view/>
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

.modal:active {
  overflow: hidden;
}
</style>
