<template>
    <div class="search">
        <div class="container2">
            <div class="s-blocks">
                <div class="s-block1">
                    <div class="container3">
                        <h1>Поиск</h1>
                        <div class="selection">
                            <div class="class-car">
                                <!-- <label for="select-cars">Класс:  </label> -->
                                <select name="select-cars" id="select-cars" class="select">
                                    <option value="#">Выберите класс авто: </option>
                                    <option value="#">Эконом</option>
                                    <option value="#">Премиум</option>
                                </select>
                            </div>
                            <div class="mark-car">
                                <!-- <label for="">Марка:  </label> -->
                                <input type="text" class="s-input" placeholder="Введите марку авто">
                            </div>
                            <div class="model-car">
                                <!-- <label for="" >Модель:  </label> -->
                                <input type="text" class="s-input" placeholder="Введите модель авто">
                            </div>
                        
                        <button class="b-search">Поиск</button>
                    </div>
                    </div>
                </div>
                <div class="s-block2">
                    <img src="../assets/search.webp" alt="search" width="870px" height="450px">
                </div>

            </div>

        </div>

        <hr>
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

.container2 {
    height: 500px;
    /* background-color: #252525; */

}

.s-blocks {
    display: flex;
}

.s-block1 {
    margin-left: 200px;
    width: 25%;
}

.s-blcok2 {
    width: 75%;
}

.s-block1 h1 {
    padding-top: 20px;
    font-weight: bold;
    margin-top: 30px;
    font-size: 40px;
    text-align: center;
    color: #000;
}

.selection {
    font-size: 25px;

}

.select,
.s-input {
    margin-top: 40px;
    font-size: 25px;
    border-radius: 7px;
}

.select {
    width: 300px;
    height: 35px;
    cursor: pointer;
}

.s-input {
    width: 295px;
    height: 35px;
    cursor: pointer;
}

.mark-car {
    margin-left: 85px;
}

.class-car {
    margin-left: 85px;
}

.model-car {
    margin-left: 85px;
}

.b-search {
    border: 3px solid rgb(25, 12, 32);
    border-radius: 7px;
    background: linear-gradient(#150031, 60%, #5d00c7);
    color: #fff;
    margin-top: 40px;
    margin-left: 85px;
    font-size: 20px;
    padding: 8px 120px 8px 120px;
    cursor: pointer;
}

.b-search:hover {
    transform: scale(1.05);
    transition: 1s;
}

.s-block2 img {
    border-radius: 20px;
    margin-left: 275px;
    margin-top: 25px;
}

hr {
    border: none;

    height: 3px;
    background-color: rgb(184, 184, 184);
}

.container3 {
    
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 3px 33px rgb(253, 253, 253);
    height: 420px;

}
</style>
    