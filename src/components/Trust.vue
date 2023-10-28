<template>
<!-- Доверие -->
<div class="trust">
        <div class="container">
            <div class="blocks1">
                <div class="block1">
                    <h1>Доверие компании</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                </div>
                <div class="block2">
                    <img src="../assets/trust.png" alt="cars" height="600px" width="870px">
                </div>
            </div>
        </div>
    </div>
    <hr>
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

/* trust */

.container {
    margin-right: 25px;
    margin-left: 25px;
    height: 700px;
    border-radius: 30px;
}

.blocks1 {
    display: flex;
}

.block1 {
    width: 50%;
}

.block2 {
    width: 50%;;
}

.trust h1 {
    font-weight: bold;
    padding: 20px 0px 20px 0px;
    text-align: center;
    font-weight: 700;
}

.trust p {
    padding: 20px 60px 20px 60px;
    font-size: 25px;
    text-indent: 25px;
}

.block2 img {
    margin-top: 50px;
    border-radius: 15px;
}
</style>
