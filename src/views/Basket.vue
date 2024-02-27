<template>
    <div class="container basket">
        <ul class="basket-list">
            <li class="basket-item">
                <div class="basket-content-box">
                    <div class="basket-img">
                        <img src="/car-icon-1.png" alt="" />
                    </div>
                    <div class="basket-content">
                        <h3 class="basket-title">Nardini</h3>
                        <p class="basket-desc">
                            Its main features include smooth handling, advanced
                            safety systems, and high-quality design.
                        </p>
                    </div>
                </div>
                <div class="basket-actions">
                    <div class="basket-btn-group">
                        <button class="basket-btn btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span class="basket-count">0</span>
                        <button class="basket-btn btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                    <span class="basket-price">$9999</span>
                </div>
            </li>
            <li class="basket-item">
                <div class="basket-content-box">
                    <div class="basket-img">
                        <img src="/car-icon-1.png" alt="" />
                    </div>
                    <div class="basket-content">
                        <h3 class="basket-title">Nardini</h3>
                        <p class="basket-desc">
                            Its main features include smooth handling, advanced
                            safety systems, and high-quality design.
                        </p>
                    </div>
                </div>
                <div class="basket-actions">
                    <div class="basket-btn-group">
                        <button class="basket-btn btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span class="basket-count">0</span>
                        <button class="basket-btn btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                    <span class="basket-price">$9999</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.basket {
    height: 500px;
    background: chocolate;
    margin-top: 100px;
    border-radius: 10px;
    padding: 20px;
}
.basket-list {
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.basket-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 100px;
}

.basket-item:not(:last-child) {
    margin-bottom: 50px;
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
</style>
