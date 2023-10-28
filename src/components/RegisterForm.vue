<script>
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';

export default {
    props: {
        showModal: Boolean,
        closeModal: Function,
    },
    components: {
        LoginForm
    },
    setup() {
        const showModal2 = ref(false);

        const closeModal2 = () => {
            showModal2.value = false;
        };

        return { showModal2, closeModal2 };
    },

};
</script>

<template>
    <LoginForm :showModal2="showModal2" :closeModal2="closeModal2" />
    <!-- <button @click="showModal = true">показать модалку</button> -->
    <div class="modal" v-if="showModal">
        <div class="modal-content">
            <div class="register">
                <div class="container">
                    <div class="reg-form">
                        <a class="krest" @click="closeModal">&#10006;</a>
                        <h1>Регистрация</h1>

                        <div>
                            <input type="text" placeholder="Имя">
                        </div>
                        <div>
                            <input type="text" placeholder="Фамилия">
                        </div>
                        <div>
                            <input type="text" placeholder="Отчество">
                        </div>
                        <div>
                            <input type="text" placeholder="Паспортные данные">
                        </div>
                        <div>
                            <input type="text" placeholder="Телефон">
                        </div>
                        <div>
                            <input type="text" placeholder="День рождения">
                        </div>
                        <div>
                            <input type="text" placeholder="Пароль">
                        </div>
                        <div>
                            <input type="text" placeholder="Повтор пароля">
                        </div>
                        <div class="enter">
                            <ul>
                                <li><button class="registr">Зарегистрироваться</button></li>
                                <li><a @click="() => { showModal2 = true; showModal = false; }">
                                        <p>Есть аккаунт?</p>
                                    </a></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  
<style scoped>
@font-face {
    font-family: "Montserrat-Regular";
    src: url(../assets/fonts/Montserrat-Regular.ttf);
}

* {
    padding: 0;
    margin: 0;

}

body {
    font-family: "Montserrat-Regular";

}

/* header  */


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

/* Form */

.container {
    z-index: 50;
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);


}

.reg-form {
    z-index: 50;
    position: fixed;
    margin-top: 50px;
    font-size: 16px;
    color: #000;
    width: 31%;
    min-width: 300px;
    margin-left: 37%;
    margin-right: 50%;
    /* margin-left: 800px; */
    height: 630px;
    background-color: #000000;


}

.reg-form {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 3px 33px rgb(253, 253, 253);
}

h1 {
    margin-left: 28%;
    margin-bottom: 10px;
    font-size: 40px;
}


label {
    font-size: 20px;
    margin-left: 149px;
}

input {
    width: 350px;
    height: 35px;
    margin-left: 110px;
    font-size: 20px;
    margin-bottom: 15px;
    padding-left: 30px;
}

.registr {
    margin-top: 15px;
    margin-left: 50px;
    width: 200px;
    height: 50px;
    border: 3px solid rgb(25, 12, 32);
    border-radius: 7px;
    background: linear-gradient(#b48aeb, 40%, #3f0086);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.registr:hover {
    transform: scale(1.05);
    transition: 1s;
}

.enter ul li {
    font-weight: bold;
    text-decoration: none;
    color: #1e008b;
    font-size: 20px;
    display: inline-block;
    justify-content: space-between;
    margin-right: 50px;
    text-decoration: underline;
    cursor: pointer;
}

.enter ul :hover {
    transition: 0.5s;
    color: rgb(10, 0, 54);
}

.enter {
    margin-left: 9.5%;
    padding-bottom: 20px;

}

.krest {
    margin-top: 100px;
    margin-left: 570px;
}
</style>
  