import LayoutHome from 'layouts/LayoutHome.vue'

import PageAssociados from 'pages/Associados/PageAssociados.vue'
import PageHome from 'pages/Home/PageHome.vue'
import PageLogin from 'pages/Login/PageLogin.vue'
import PageMovimentacoes from 'pages/Movimentacoes/PageMovimentacoes.vue'
import PageResetPassword from 'pages/ResetPassword/PageResetPassword.vue'
import PageSvgs from 'pages/svg/PageSvgs.vue'

//
const routes = [
  {
    path: '/',
    component: LayoutHome,

    children: [
      {
        alias: '/',
        name: 'home',
        path: '/home',
        component: PageHome,
        meta: {
          breadcrumbs: [{ label: 'Home', name: 'home' }],
          title: 'Home',
        },
      },
      {
        alias: '/associados',
        name: 'associados',
        path: '/associados',
        component: PageAssociados,
        meta: {
          breadcrumbs: [{ label: 'Associados', name: 'associados' }],
          title: 'Associados',
        },
      },
      {
        alias: '/movimentacoes',
        name: 'movimentacoes',
        path: '/movimentacoes',
        component: PageMovimentacoes,
        meta: {
          breadcrumbs: [{ label: 'Movimentações', name: 'movimentacoes' }],
          title: 'Movimentações',
        },
      },

      {
        name: 'svgs',
        path: '/svgs',
        component: PageSvgs,
        meta: {
          publicPage: true,
          breadcrumbs: [{ label: 'Svgs', name: 'svgs' }],
        },
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: PageLogin,
    meta: {
      publicPage: true,
    },
  },

  {
    path: '/password/reset/confirm/:uid/:token',
    name: 'redefinir-senha',
    component: PageResetPassword,
    meta: {
      title: 'Redefinir Senha',
      publicPage: true,
    },
    props: true,
    strict: true,
  },

  {
    path: '/testes',
    name: 'testes',
    component: () => import('layouts/LayoutTest.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('pages/Blank/PageBlank.vue'),
    meta: {
      publicPage: true,
    },
  },
]

export default routes
