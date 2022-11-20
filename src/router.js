import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";


const routes = [


    {
        path: "/login", component: LoginComponent
    },
    
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;