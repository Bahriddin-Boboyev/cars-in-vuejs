<template>
    <div class="container order">
        <div class="order-box">
            <video width="320" height="240" autoplay loop muted>
                <source src="/dealivrey-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h3 class="order-title">Your order will be delivered soon :)</h3>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.order-box {
    height: 500px;
    background: chocolate;
    margin-top: 100px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    padding-top: 150px;
}
.order-video {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
}
.order-title {
    font-size: 23px;
    color: #fff;
}
</style>
