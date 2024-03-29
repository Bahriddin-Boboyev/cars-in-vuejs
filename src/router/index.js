import { createRouter, createWebHistory } from "vue-router";
import { Home, About, Basket, NotFound, Order } from "../views";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about/:id",
            name: "About",
            component: About,
        },
        {
            path: "/basket",
            name: "Basket",
            component: Basket,
        },
        {
            path: "/order",
            name: "Order",
            component: Order,
        },
        {
            path: "/:catchall(.*)*",
            name: "Page Not found",
            component: NotFound,
        },
    ],
});

export default router;
