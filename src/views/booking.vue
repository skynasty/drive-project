<script setup>
import Navbar from '../components/Navbar.vue'
import FormBooking from '../components/FormBooking.vue'
</script>

<template>
<body>
  <div class="booking-page">
    <Navbar/>
    <FormBooking/>
  </div>
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
