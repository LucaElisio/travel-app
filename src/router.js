import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import DaysPage from "./pages/DaysPage.vue";
import BagPage from "./pages/BagPage.vue";


export const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        {
            path: "/days",
            name: "Giornate",
            component: DaysPage
        },
        {
            path: "/bag",
            name: "Borsa",
            component: BagPage
        }
    ]
})

