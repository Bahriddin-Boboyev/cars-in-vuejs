<template>
    <header class="header">
        <div class="header-box container">
            <div class="header-img-box">
                <router-link to="/"
                    ><img src="/logo.png" alt="logo"
                /></router-link>
            </div>
            <ul class="header-list">
                <li class="header-item">
                    <router-link
                        to="/basket"
                        class="header-link"
                        style="color: #1d1e2c"
                    >
                        <i
                            class="fa-solid fa-cart-plus"
                            style="color: #11cc80"
                        />
                        <span class="basket-count">{{
                            cars?.length ? calcBasketCount(cars) : 0
                        }}</span>
                        Basket</router-link
                    >
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { calcBasketCount } from "@/utils";
import { useStore } from "vuex";

const store = useStore();
const cars = ref(store.state.cars);

watchEffect(() => {
    cars.value = store.state.cars;
});
</script>

<style scoped>
.header {
    width: 100%;
    background-color: hsla(0, 0%, 95.3%, 0.75);
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding-top: 5px;
    padding-bottom: 5px;
}

.header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-img-box {
    width: 100px;
    height: auto;
}
.header-link {
    position: relative;
    color: black;
}

.basket-count {
    position: absolute;
    display: inline-block;
    width: 17px;
    height: 17px;
    font-size: 13px;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-weight: 600;
    top: -7px;
    left: -10px;
}
</style>
