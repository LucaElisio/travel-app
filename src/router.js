import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter ({
    history: createWebHistory(),
    router: [
        {
            path: "/",
            name: home,
            component: HomePage
        }
    ]
})