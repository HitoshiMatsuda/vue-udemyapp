import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'User',
    props: true,
    component: User,
    children: [
      {
        path: 'post',
        name: 'Post',
        component:Post
      },
      {
        path: 'profile',
        name: 'Profile',
        component:Profile
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router