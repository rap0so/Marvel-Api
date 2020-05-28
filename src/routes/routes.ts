const routes = [
  {
    component: './pages/home',
    exact: true,
    path: '/',
  },
  {
    component: './pages/series',
    exact: true,
    path: '/series/:id',
  },
  {
    component: './pages/notFound',
    path: '/404',
  },
];

export default routes;
