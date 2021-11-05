import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "./components/DashBoard.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: "dashboard",
            path: "/dashboard",
            component: DashBoard,
        },
        {
            name: "dashboard",
            path: "/",
            component: DashBoard,
        },
    ],

    mode: "history",
});
