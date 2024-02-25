<template>
    <div>
        <Navbar />
        <div class="container main">
            <h1 class="hero-title">Cars Market</h1>
            <ul class="cart-list">
                <Cart v-for="car in cars" :key="car.id" :car="car" />
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Navbar, Footer, Cart } from "../components";
import { carList } from "@/../data";

const cars = ref(carList);
</script>

<style scoped>
.hero-title {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
}
.cart-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    place-content: center;
}

@media screen and (max-width: 560px) {
    .cart-list {
        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    }
}
</style>
