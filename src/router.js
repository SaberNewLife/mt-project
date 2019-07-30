import Vue from 'vue'
import VueRouter from 'vue-router'
import a from './components/a.vue'
import b from './components/b.vue'

Vue.use(VueRouter)

const router=new VueRouter({
    routes:[
        {path:'/pagea',component:a},
        {path:'/pageb',component:b},
    ]
})
export default router