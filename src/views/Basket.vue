<template>
    <div class="container">
        <div class="basket-box">
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
            <div v-if="cars && cars.length" class="down-group">
                <h3 class="total-price">
                    Total Price: ${{ calcTotalPrice(cars) }}
                </h3>
                <button class="btn order" @click="handleOrder">
                    Order now
                </button>
            </div>

            <div class="basket-not-found" v-else>
                <h3>Basket is empty :(</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { MINUS, PLUS } from "@/constants";
import { calcTotalPrice } from "@/utils";

const store = useStore();
const router = useRouter();
const cars = ref(store.state.cars);

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

const handleOrder = () => {
    store.commit("clearCar");
    router.push("/order");
};
</script>

<style scoped>
.basket {
    padding: 0;
}
.basket-box {
    min-height: 500px;
    background: chocolate;
    margin-top: 100px;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
}

.down-group {
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.total-price {
    color: #fff;
}
.order {
    font-size: 17px;
    font-weight: 600;
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

/* MEDIA */

@media screen and (max-width: 900px) {
    .basket-item {
        flex-direction: column;
    }
    .basket-img {
        width: 180px;
        margin-bottom: 15px;
    }
    .basket-desc {
        max-width: 80%;
        margin: 0 auto;
    }

    .basket-content-box {
        text-align: center;
        flex-direction: column;
        margin-bottom: 25px;
    }

    .basket-actions {
        width: 50%;
        justify-content: space-between;
    }
}

@media screen and (max-width: 700px) {
    .basket-actions {
        width: 90%;
    }
    .down-group {
        justify-content: space-around;
    }
}
@media screen and (max-width: 500px) {
    .basket-desc {
        max-width: 100%;
    }
    .basket-not-found h3 {
        font-size: 15px;
    }
}
@media screen and (max-width: 410px) {
    .basket-btn {
        padding: 3px 10px;
    }

    .total-price {
        font-size: 16px;
    }

    .order {
        font-size: 16px;
        padding: 3px 10px;
    }
}
</style>
