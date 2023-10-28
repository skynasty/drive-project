<template>
  <h1>Форма бронирования</h1>
  <div class="bron">
    <div class="information">
      <div class="car-info">
        <h2>Данные об авто</h2>
        <div class="inf-first">
          <div>
            <label for="carId">Идентификатор машины:</label><br>
            <input type="text" id="carId" name="carId"><br>
          </div>
          <div>
            <label for="carBrand">Марка авто:</label><br>
            <input type="text" id="carBrand" name="carBrand"><br>
          </div>
        </div>

        <div class="inf-second">
          <div>
            <label for="carName">Название авто:</label><br>
            <input type="text" id="carName" name="carName"><br>
          </div>
          <div>
            <label for="carNumber">Номер машины:</label><br>
            <input type="text" id="carNumber" name="carNumber"><br>
          </div>
        </div>

        <div class="inf-third">
          <div>
            <label for="bookingDate">Дата бронирования:</label><br>
            <input type="date" id="bookingDate" name="bookingDate"><br>
          </div>
          <div>
            <label for="returnDate">Дата возврата:</label><br>
            <input type="date" id="returnDate" name="returnDate"><br>
          </div>
        </div>

        <div class="inf-forth">
          <div>
            <label for="bookingCostPerDay">Стоимость за день:</label><br>
            <input type="number" id="bookingCostPerDay" name="bookingCostPerDay"><br>
          </div>
          <div>
            <label for="branch">Филиал:</label><br>
            <input type="text" id="branch" name="branch"><br>
          </div>
          
        </div>
        <button onclick="calculateFinalCost()">Рассчитать</button>
      </div>

      <div class="vl"></div>

      <div class="client-info">
        <h2>Данные о клиенте</h2>
        <div class="inf-c-first">
          <div>
            <label for="firstName">Имя:</label><br>
            <input type="text" id="firstName" name="firstName" placeholder=" Иван"><br>
          </div>
          <div>
            <label for="lastName">Фамилия:</label><br>
            <input type="text" id="lastName" name="lastName" placeholder=" Иванов"><br>
          </div>
        </div>
        <div class="inf-c-second">
          <div>
            <label for="patronymic">Отчество:</label><br>
            <input type="text" id="patronymic" name="patronymic" placeholder=" Иванович"><br>
          </div>
          <div>
            <label for="phone">Номер телефона:</label><br>
            <input type="text" id="phone" name="phone" placeholder=" Введите телефон"><br>
          </div>
          
        </div>
        <div class="inf-c-third">
          <div>
            <label for="passportData">Паспортные данные:</label><br>
            <input type="text" id="passportData" name="passportData"><br>
          </div>
          <div>
            <label for="bankCard">Банковская карта:</label><br>
            <select name="text" id="bankCard">
              <option value="">Выберите банк</option>
              <option value="">Тинькофф банк</option>
              <option value="">Почта банк</option>
              <option value="">Совкомбанк</option>
              <option value="">Сбербанк</option>
              <option value="">Оптбанк</option>
            </select><br>
          </div>
        </div>
        <div>
            <div class="inf-c-forth">
            <div>
            <label for="dob">Дата рождения:</label><br>
            <input type="date" id="dob" name="dob"><br>
            </div>
            <div>
            <label for="bank">Банковская карта:</label><br>
            <input type="text" id="bank" name="bank"><br>
          </div>
        </div>
      </div>
      <button onclick="submitReservation()">Забронировать</button>
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

/* Бронирование */

h1 {
    margin-top: 20px;
    margin-bottom: 11px;
    text-align: center;
}

h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 30px;
}
.information {
    display: flex;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    width: 1240px;
    margin-left: 330px;
    border-radius: 20px;
    box-shadow: 0px 3px 33px rgb(253, 253, 253);
}


.car-info {
    width: 50%;
    color: #000;
    height: 600px;
    width: 600px;
    margin-left: 60px;
}

.client-info {
    width: 50%;
}

.inf-first, .inf-second, .inf-third, .inf-forth {
    display: flex;
    margin-bottom: 30px;
}

input, select {
    width: 250px;
    height: 40px;
    margin-top: 20px;
    font-size: 20px;
}

.inf-first :first-child, .inf-second :first-child, .inf-third :first-child, .inf-forth :first-child {
    margin-right: 35px;

}


.inf-c-first, .inf-c-second, .inf-c-third, .inf-c-forth {
    display: flex;
    margin-bottom: 30px;
}

.inf-c-first :first-child, .inf-c-second :first-child, .inf-c-third :first-child, .inf-c-forth :first-child {
    margin-right: 35px;

}

.bron {
    height: 925px;
    font-family: "Montserrat-Regular";
}

.vl {
    border-left: 4px solid rgb(173, 173, 173);
    height: 497px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 13.6%;
}

button {
    margin-left: 110px;
    width: 300px;
    height: 50px;
    border: 3px solid rgb(25, 12, 32);
    border-radius: 7px;
    background: linear-gradient(#b48aeb,40%, #3f0086);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
	transform: scale(1.05);
    transition: 1s;
}

</style>
