<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const branches = {
  data() {
    return {
      view: "first"
    };
  },
  components: {
    "first": {
      template: "<div>Component A</div>"
    }
  }
};
</script>

<template>
    <body>
        <Navbar />
        <h1>Наши филиалы</h1>
        <div class="blocks">
            <div class="block1">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3915d51d518cee7b73ae70b1d3f4e4b1f3dfb5fa7158e19f2cf10aa2cf75d05f&amp;source=constructor"
                    width="1200" height="701" frameborder="0"></iframe>
            </div>

            <div class="block2">
                <div class="btn">
                    <span value="first" id="first">Филиал 1</span><br>
                </div>
                <div class="btn">
                    <span>Филиал 2</span><br>
                </div>
                <div class="btn">
                    <span>Филиал 3</span><br>
                </div>
                <div class="btn">
                    <span>Филиал 4</span><br>
                </div>
                <div class="btn">
                    <span>Филиал 5</span><br>
                </div>

            </div>
        </div>
        <hr>
        <Footer />
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
    background: linear-gradient(#55258d, 70%, #150031);
    width: 100%;
    height: 100%;
}

h1 {
    text-align: center;
    margin-bottom: 19.4px;
    margin-top: 15px;
    font-size: 40px;
}

iframe {
    margin-left: 100px;
    margin-bottom: 25px;
}

.blocks {
    display: flex;
}

.block1 {
    width: 75%;
}

.block2 {
    width: 25%;
}


.btn:first-child {
    margin-top: 100px;
}

.btn {
    font-size: 25px;
    padding-top: 15px;
    line-height: 50px;
    height: 65px;
    text-align: center;
    width: 350px;
    cursor: pointer;
    color: #FFF;
    transition: all 0.5s;
    position: relative;
    margin-bottom: 30px;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
}

.btn:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
}

.btn:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}
</style>
