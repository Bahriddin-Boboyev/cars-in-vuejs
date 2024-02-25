<template>
    <NavbarVue />
    <div class="container main">
        <h1 class="hero-title">Cars Market</h1>
        <ul class="cart-list">
            <Cart v-for="car in cars" :key="car.id" :car="car" />
        </ul>
    </div>
    <Footer />
</template>

<script setup>
import { ref } from "vue";
import { NavbarVue, Footer } from "./components";
import Cart from "./components/main/Cart.vue";
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
}
</style>
