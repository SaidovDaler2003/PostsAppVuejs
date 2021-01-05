import Home from '../components/pages/Home.vue';
import PostPage from '../components/pages/PostPage.vue';
import Create from '../components/pages/Create.vue';

export default [
  {
    path: '/',
    component: Home,
    name: 'home-page'
  },
  {
    path: '/post/:id',
    component: PostPage
  },
  {
    path: '/create',
    component: Create
  }
];
