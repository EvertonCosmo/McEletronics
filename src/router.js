import Vue from 'vue'
import Router from 'vue-router'
import  LoginComponent from './components/Login.vue'
import PageLoginComponent from './components/PageLogin.vue'


Vue.use(Router)



export default new Router({

    routes: [
            {
                path: "/",
                redirect: {
                    name:"Login"
                }
            },
            {
                path:"/Login",
                name:"Login",
                component:LoginComponent
            },
            {
                path:"/PageLogin",
                name:"PageLogin",
                component:PageLoginComponent

            }

    ]

})