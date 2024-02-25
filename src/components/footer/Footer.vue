<template>
    <footer class="footer">
        <div class="footer-block container">
            <span class="footer-terms">© Cars Market {{ yearNow }}</span>
        </div>
    </footer>
</template>

<script setup>
const yearNow = new Date().getFullYear();
</script>

<style scoped>
.footer {
    width: 100%;
    padding: 40px 0;
    background-color: hsla(0, 0%, 95.3%, 0.75);
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.05);
}

.footer-terms {
    font-size: 17px;
    display: block;
    text-align: end;
    font-weight: 500;
}
</style>
