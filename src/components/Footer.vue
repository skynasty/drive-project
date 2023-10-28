<template>
    <footer>
        <div class="container4">
            <div class="f-blocks">
                <div class="l-footer">
                    <p>8 (800) 111-11-11</p> 
                </div>
                <div class="r-footer">
                    <nav class="f-nav">
                        <ul>
                            <a href="#"><li>Акции</li></a>
                            <a @click="$router.push('/about')"><li>Бронирование</li></a>
                            <a href="#"><li>Личный кабинет</li></a>
                            <a href="#"><li>Филиалы</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
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

/* footer */

.container4 {
    height: 70px;
    color: #fff;
}

.f-blocks {
    display: flex;
}

.l-footer {
    width: 30%;
}

.l-footer p{
    margin-left: 235px;
    margin-top: 20px;
    font-size: 25px;
}

.r-footer {
    width: 70%;
}

.f-nav {
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: 600px;
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

a {
    cursor: pointer;
}
</style>
