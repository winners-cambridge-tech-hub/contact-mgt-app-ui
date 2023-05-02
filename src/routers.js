import {createRouter, createWebHistory} from 'vue-router'
import ContactManagement from "./app/ContactManagement";

const routes = [
    {
        path: "/",
        redirect: "/contacts"
    },
    {
        name: "contacts",
        component: ContactManagement,
        path: "/contacts",
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
