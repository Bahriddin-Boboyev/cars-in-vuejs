import { createRouter, createWebHistory } from "vue-router";
import { Home, About, Basket } from "../views";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/basket",
            name: "Basket",
            component: Basket,
        },
    ],
});

export default router;
