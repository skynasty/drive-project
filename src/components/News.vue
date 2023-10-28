<template>
    <!-- Новости -->
    <div class="news">
        <div class="container3">
            <h1>НОВОСТИ!</h1>
            <div class="n-blocks">
                <div class="n-block1">
                    <h3>Новость 1</h3>
                    <img src="../assets/news1.jpeg" alt="" height="340px" width="460px">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui mauris, tempor a facilisis nec, fermentum sit amet ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin congue dignissim mi, ut euismod nisi vestibulum in. Etiam efficitur orci euismod, porttitor metus ac, pulvinar dolor. Vestibulum tincidunt porttitor dui sed efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec risus vitae leo volutpat ultrices. Phasellus pellentesque massa sed libero gravida rhoncus ac ut neque. Aliquam sem erat, congue eu maximus sit amet, malesuada in neque. Etiam sollicitudin tristique pretium. Sed nibh massa, sagittis id ligula finibus, mattis placerat massa. Etiam egestas in dolor vitae consequat.</p>
                    <button class="n-button">Подробнее</button>
                </div>
                <div class="n-block2">
                    <h3>Новость 2</h3>
                    <img src="../assets/news2.jpg" alt="" height="340px" width="460px">
                    <p>Nam at egestas risus. Cras elementum nulla sapien, quis blandit augue mollis a. Etiam nec nisi posuere, mollis tortor a, ullamcorper ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu justo odio. Praesent neque elit, semper ac augue sed, porttitor tristique lorem. Sed molestie velit est, in hendrerit nisi venenatis sit amet. Nullam euismod mauris sit amet neque auctor interdum. Duis faucibus feugiat tortor, quis tincidunt est maximus ut. Proin nisi nulla, faucibus a viverra consequat, imperdiet eget lorem. Curabitur tincidunt vehicula enim, sed tincidunt magna sagittis sed.</p>
                    <button class="n-button">Подробнее</button>
                </div>
                <div class="n-block3">
                    <h3>Новость 3</h3>
                    <img src="../assets/news3.jpg" alt="" height="340px" width="460px">
                    <p>Ut id nisl eu urna elementum facilisis sit amet eu mauris. Nunc nibh ante, tincidunt quis dignissim in, euismod euismod eros. Ut eleifend magna vel mauris fermentum, sed dignissim nulla hendrerit. Nullam convallis tincidunt velit ut ullamcorper. Morbi at erat imperdiet, maximus ipsum ac, molestie purus. Suspendisse vitae ante rhoncus, efficitur massa non, finibus dolor. Ut ut tellus purus. Nunc tristique viverra est, vel efficitur nunc. In mollis lacinia sem, in condimentum lorem pellentesque ac. Fusce eget consequat massa. Cras semper urna in risus porttitor, a ultrices orci tempus. Ut imperdiet mattis ante, commodo imperdiet tortor imperdiet et. Ut vel fermentum tortor. Quisque venenatis consequat odio, non convallis eros molestie et.</p>
                    <button class="n-button">Подробнее</button>
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


.container3{
    margin-top: 40px;
    height: 950px;
}

.container3 h1{
    text-align: center;
    margin-bottom: 45px;
    font-size: 40px;
}

.n-blocks {
    margin-left: 195px;
    margin-right: 40px;
    display: flex;
}

.n-block1 {
    width: 30%;
}

.n-block2 {
    width: 30%;
}

.n-block3 {
    width: 30%;
}

.n-block1 h3, .n-block2 h3, .n-block3 h3 {
    text-align: center;
    margin-bottom: 20px;
}

.n-blocks img {
    margin-left: 25px;
    border-radius: 20px;
    margin-bottom: 20px;
}

.n-blocks p {
    text-indent: 25px;
    max-width: 450px;
    margin-left: 30px;
}

.n-button {
    border: 3px solid rgb(25, 12, 32);
    border-radius: 7px;
    background: linear-gradient(#21014b,60%, #5d00c7);
    color: #fff;
    margin-top: 40px;
    margin-left: 25px;
    font-size: 20px;
    padding: 8px 180px 8px 180px;
    cursor: pointer;
}

.n-button:hover {
    transition: 1s;
	transform: scale(1.05);
}

</style>
