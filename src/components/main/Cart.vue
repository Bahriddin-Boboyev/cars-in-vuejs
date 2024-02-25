<template>
    <li class="car" @click="(e) => handleCartClick(e, car.id)">
        <div class="car-img__box">
            <img class="car-img" :src="car.img" :alt="car.name" />
        </div>
        <div class="car-content">
            <h4 class="car-title">{{ car.name }}</h4>
            <div class="car-disc__box">
                <p>Description:</p>
                <span>
                    {{ car.description }}
                </span>
            </div>
            <div class="car-price__box">
                <p class="car-price">Price:</p>
                <span>{{ car.price }}</span>
            </div>
        </div>
        <button class="btn btn-primary">Buy now</button>
    </li>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
    car: Object,
});

const handleCartClick = (event, id) => {
    if (event.target.className === "btn btn-primary") {
        return;
    }
    router.push(`/about/${id}`);
};
</script>

<style scoped>
.car {
    max-width: 100%;
    width: 100%;
    min-height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f26419;
    border-radius: 5px;
    padding: 0 15px;
    cursor: pointer;
}

.car-img__box {
    width: 200px;
    height: 200px;
}
.car-img {
    object-fit: contain;
}

.car-content {
    width: 100%;
    flex-grow: 1;
    margin: 0 10px;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    box-shadow: 3px 3px 10px rgb(0, 0, 0, 0.3);
    margin-bottom: 10px;
}

.car-title {
    text-align: center;
    font-size: 18px;
}

.btn-primary {
    width: 80%;
    font-size: 17px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 15px;
}

.car-disc__box {
    margin-top: 10px;
}

.car-disc__box p {
    font-weight: 600;
    margin-bottom: 7px;
}

.car-price__box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
    font-size: 17px;
    font-weight: 600;
}
</style>
