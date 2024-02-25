<template>
    <header class="header">
        <div class="header-box container">
            <div class="header-img-box">
                <a href="/"><img src="/logo.png" alt="logo" /></a>
            </div>
            <ul class="header-list">
                <li class="header-item">
                    <a href="/about" class="header-link">About</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>
.header {
    width: 100%;
    background-color: hsla(0, 0%, 95.3%, 0.75);
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
}

.header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-img-box {
    width: 40px;
    height: 40px;
}
.header-link {
    color: black;
}
</style>
