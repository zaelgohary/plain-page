import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import SignIn from '../views/SigninView.vue'
import SignUp from '../views/SignupView.vue'
import AddBlog from '@/views/AddBlogView.vue'
import NotFound from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/create',
      name: 'add-blog',
      component: AddBlog
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/notfound',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
