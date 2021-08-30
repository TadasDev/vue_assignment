import Vue from 'vue'
import VueRouter from 'vue-router'
import MainAll from "@/views/MainAll";
import SingleGiveAway from "@/views/SingleGiveAway";
import SortGiveAway from "@/views/SortGiveAway";

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MainAll',
    component: MainAll
  },
  {
    path: '/single-giveaway/:id',
    name: 'SingleGiveAway',
    component: SingleGiveAway
  },
  {
    path: '/sort',
    name: 'SortGiveAway',
    component: SortGiveAway
  },
]

const router = new VueRouter({
  routes
})

export default router
