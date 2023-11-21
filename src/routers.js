import {createRouter, createWebHistory} from 'vue-router'
import dashboard from "./app/contact/dashboard";
import ContactTable from "./app/contact/ContactTable";


const routes = [
    {
        path: "/",
        redirect: 'dashboard'
    },
    {
        name: "dashboard",
        component: dashboard,
        path: "/dashboard",
        props: (route) => ({
            page: route.query.page
        }),
    },
    {
        name: "ContactTable",
        component: ContactTable,
        path: "/table",
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;

