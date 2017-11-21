/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import firsts from '../pages/firsts.vue'
import types from '../pages/types.vue'
import carts from '../pages/carts.vue'
import myPets from '../pages/myPets.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/firsts'
    },
    {
      path:'/firsts',
      component:firsts,
    },
    {
      path:'/types',
      component:types
    },
    {
      path:'/carts',
      component:carts
    },
    {
      path:'/myPets',
      component:myPets
    }
  ]
})
