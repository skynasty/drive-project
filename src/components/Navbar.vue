<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'App',
  components: {
    RegisterForm,
    RouterLink,
    RouterView
  },
  setup() {
    const showModal = ref(false);

    const closeModal = () => {
      showModal.value = false;
    };

    return { showModal, closeModal };
  },
};

</script>

<template>
    <RegisterForm :showModal="showModal" :closeModal="closeModal" />
    <header class="header">
              <nav class="nav">
                  <img @click="$router.push('/')" src="../assets/logo.png" alt="" class="logo">
                  <ul>
                      <a href="#"><li>Акции</li></a>
                      <a @click="$router.push('/about')"><li>Бронирование</li></a>
                      <a @click="showModal = true"><li>Личный кабинет</li></a>
                      <a @click="$router.push('/branches')"><li>Филиалы</li></a>
                  </ul>
              </nav>
    </header>
</template>

<style scoped>
@font-face {
    font-family: "Montserrat-Regular";
    src: url(../assets/fonts/Montserrat-Regular.ttf);
}

* {
    padding: 0;
    margin: 0;
    overflow: hidden;
}

/* header  */

.header {
    max-height: 70px;
    position: sticky;
    top: 0px;
    background: linear-gradient(#994af3,70%, #4b2a75);
}

.nav {
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    
}

ul li {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    display: inline-block;
    justify-content: space-between;
    margin-right: 50px;
}

ul :hover {
    transition: 1s;
    color: aqua;
}
.nav ul a:last-child {
    margin-right: 650px;
}

.logo {
    cursor: pointer;
    height: 30px;
    border-radius: 15px;
    margin-left: 50px;
    background-color: #fff;
    padding: 5px 10px 5px 10px;
}

.header img :hover {
    transform: scale(1.1);
    transition: 1s;
}

a {
    cursor: pointer;
}

</style>
