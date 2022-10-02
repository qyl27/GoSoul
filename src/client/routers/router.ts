import Board from "@/client/components/Board.vue";
import Home from "@/client/components/Home.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/play',
        name: 'Board',
        component: Board
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
