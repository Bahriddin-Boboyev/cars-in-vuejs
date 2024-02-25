<template>
    <Navbar />
    <div class="main-content">
        <RouterView />
    </div>
    <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import { Navbar, Footer } from "@/components";
</script>

<style scoped></style>
