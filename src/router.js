import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            redirect: "home",
            component: Index,
            children: [{
                    path: "home",
                    name: 'home',
                    component: Home
                },
                {
                    path: 'archives',
                    name: 'archives',
                    component: () =>
                        import('./views/Archives.vue')
                },
                {
                    path: "article",
                    name: "Article",
                    component: () =>
                        import("./views/Article.vue")
                }
            ]
        },
        {
            path: '/add',
            name: 'add',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ './views/Add.vue')
        },
        {
            path: "/register",
            name: "Register",
            component: () =>
                import("./views/Register.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import("./views/Login.vue")
        },

    ]
})