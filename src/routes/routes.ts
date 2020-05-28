const routes = [
  {
    exact: true,
    component: './pages/home',
    path: '/',
  },
  {
    exact: true,
    component: './pages/series',
    path: '/series/:id',
  },
  {
    component: './pages/notFound',
    path: '/404',
  },
];

export default routes;
