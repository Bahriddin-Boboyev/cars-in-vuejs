<template>
    <div class="container about" v-if="card">
        <div class="about-box">
            <div class="about-box__inner">
                <div class="about-img">
                    <img :src="card.img" :alt="card.name" />
                </div>
                <div class="about-content">
                    <h2 class="about-title">{{ card.name }}</h2>
                    <p class="about-desc">
                        {{ card.description }}
                    </p>

                    <p class="about-price">
                        Price: <span>${{ card.price }}</span>
                    </p>
                </div>
            </div>
            <button class="btn about-btn">Buy now</button>
        </div>
    </div>
    <div class="container" v-else>
        <div class="about-not-found">
            <h4>Oops. No car found with id {{ route.params.id }} :(</h4>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { carList } from "@/../data";

const route = useRoute();
const card = computed(() => carList.find((item) => item.id == route.params.id));
</script>

<style scoped>
.about {
    width: 100%;
    margin-top: 20px;
    margin-top: 100px;
}

.about-box {
    background-color: chocolate;
    border-radius: 10px;
    box-shadow: 7px 7px 10px 10px rgba(0, 0, 0, 0.2);
    padding: 20px 30px;
}

.about-box__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    gap: 20px;
    margin: 30px 0;
}

.about-img {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 15px;
}
.about-content {
    color: #fff;
    text-align: center;
    background-color: blueviolet;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
}

.about-title {
    font-size: 27px;
    margin-bottom: 18px;
}

.about-desc {
    text-align: start;
    margin-bottom: 20px;
    height: max-content;
    flex-grow: 1;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
}
.about-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 19px;
    font-weight: 600;
}

.about-btn {
    width: 200px;
    font-size: 20px;
    display: block;
    margin: 0 auto;
}

/* NOT FOUND */

.about-not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.about-not-found h4 {
    color: #fff;
    font-size: 25px;
}

/* -----------------  */

@media screen and (max-width: 700px) {
    .about-box__inner {
        grid-template-columns: repeat(1, 1fr);
    }
}
@media screen and (max-width: 500px) {
    .about-title {
        font-size: 22px;
    }

    .about-desc {
        font-size: 17px;
    }
    .about-price {
        font-size: 16px;
    }

    .about-btn {
        width: 200px;
        font-size: 18px;
    }
}

@media screen and (max-width: 400px) {
    .about-box {
        padding: 15px 20px;
    }
    .about-img {
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 8px;
    }
}

@media screen and (max-width: 360px) {
    .about-btn {
        width: 100%;
        font-size: 17px;
    }
}
</style>
