import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

// admin project pages
import home from './components/pages/home'
import tags from './admin/pages/tags'
import category from "./admin/pages/category";
/*import Chart from 'chart.js'*/

//project routes
const routes = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/tags',
        component: tags,
    },
    {
        path: '/category',
        component: category,
    },






    {
        path: '/my-new-vue-route',
        component: firstPage
    },

    // basic tutorial routes
   {
        path: '/new-route',
        component: newRoutePage
    },
    // vue hooks
    {
        path: '/hooks',
        component: hooks
    },
    // more basic
    {
        path: '/methods',
        component: methods
    },
];

export default new VueRouter({
    mode: 'history',
    routes
})