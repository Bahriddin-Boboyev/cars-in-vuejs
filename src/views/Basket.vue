<template>
    <div class="container basket">
        <ul class="basket-list" v-if="cars && cars.length">
            <li class="basket-item" v-for="car in cars" :key="car.id">
                <div class="basket-content-box">
                    <div class="basket-img">
                        <img :src="car.img" :alt="car.name" />
                    </div>
                    <div class="basket-content">
                        <h3 class="basket-title">{{ car.name }}</h3>
                        <p class="basket-desc">
                            {{ car.description }}
                        </p>
                    </div>
                </div>
                <div class="basket-actions">
                    <div class="basket-btn-group">
                        <button
                            class="basket-btn btn"
                            @click="
                                () =>
                                    handleStoreCar({
                                        type: MINUS,
                                        value: car,
                                    })
                            "
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="basket-count">{{ car.count }}</span>
                        <button
                            class="basket-btn btn"
                            @click="
                                () =>
                                    handleStoreCar({
                                        type: PLUS,
                                        value: car,
                                    })
                            "
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <span class="basket-price"
                        >${{ car.count * car.price }}</span
                    >
                </div>
            </li>
        </ul>
        <h3 class="total-price" v-if="cars && cars.length">
            Total Price: ${{ calcTotalPrice(cars) }}
        </h3>

        <div class="basket-not-found" v-else>
            <h3>Basket is empty :(</h3>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { MINUS, PLUS } from "@/constants";
import { calcTotalPrice } from "@/utils";

const store = useStore();
let cars = ref(store.state.cars);

watchEffect(() => {
    cars.value = store.state.cars;
});

const handleStoreCar = ({ type, value }) => {
    if (type === PLUS) {
        store.commit("plusCar", value);
        return;
    }

    store.commit("minusCar", value);
};
</script>

<style scoped>
.basket {
    min-height: 500px;
    background: chocolate;
    margin-top: 100px;
    border-radius: 10px;
    padding: 20px;
    position: relative;
}

.total-price {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
}
.basket-list {
    padding: 15px;
}

.basket-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 100px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 30px;
}

.basket-content-box {
    max-width: 800px;
    display: flex;
    align-items: center;
    column-gap: 50px;
    color: rgba(255, 255, 255, 0.8);
}

.basket-title {
    font-size: 23px;
    margin-bottom: 5px;
}
.basket-desc {
    font-size: 16px;
    font-weight: 500;
}

.basket-img {
    width: 150px;
    flex-shrink: 0;
}

.basket-actions {
    display: flex;
    align-items: center;
}

.basket-btn-group {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 5px;
}
.basket-btn-group span {
    display: inline-block;
    padding: 0 10px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
}

.basket-btn-group button {
    background-color: transparent;
}
.basket-btn-group button:hover {
    transform: translateY(0);
}

.basket-price {
    display: inline-block;
    padding: 0 20px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
}

/* NOT FOUND */

.basket-not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
}

.basket-not-found h3 {
    color: #fff;
    font-size: 25px;
}
</style>
