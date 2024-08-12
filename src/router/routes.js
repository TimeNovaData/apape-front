import LayoutHome from 'layouts/LayoutHome.vue'
import PageAssociadoCreate from 'pages/Associados/PageAssociadoCreate.vue'
import PageAssociadoSingle from 'pages/Associados/PageAssociadoSingle.vue'

import PageAssociados from 'pages/Associados/PageAssociados.vue'
import PageHome from 'pages/Home/PageHome.vue'
import PageLogin from 'pages/Login/PageLogin.vue'
import PageMovimentacoes from 'pages/Movimentacoes/PageMovimentacoes.vue'
import PageResetPassword from 'pages/ResetPassword/PageResetPassword.vue'
import PageResumo from 'pages/Resumo/PageResumo.vue'
import PageSvgs from 'pages/svg/PageSvgs.vue'

function setTitle(to, from, next) {
  const title = to.meta?.title
  document.title = `APAPE ${title ? `- ${title}` : ''}`
  next()
}

//
const routes = [
  {
    path: '/',
    component: LayoutHome,

    children: [
      {
        alias: '/resumo',
        name: 'resumo',
        path: '/resumo',
        component: PageResumo,
        beforeEnter: setTitle,
        meta: {
          breadcrumbs: [{ label: 'Resumo', name: 'resumo' }],
          title: 'Resumo',
        },
      },
      {
        alias: '/home',
        name: 'home',
        path: '/',
        component: PageAssociados,
        beforeEnter: setTitle,
        meta: {
          breadcrumbs: [{ label: 'Associados', name: 'associados' }],
          title: 'Associados',
        },
      },
      {
        alias: '/associados/:id',
        name: 'associado',
        path: '/associados/:id',
        component: PageAssociadoSingle,
        beforeEnter: setTitle,
        meta: {
          title: 'Associados',
        },
      },
      {
        alias: '/associados/adicionar',
        name: 'associados-adicionar',
        path: '/associados/adicionar',
        component: PageAssociadoCreate,
        beforeEnter: setTitle,
      },

      {
        alias: '/movimentacoes',
        name: 'movimentacoes',
        path: '/movimentacoes',
        component: PageMovimentacoes,
        beforeEnter: setTitle,
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
    beforeEnter: setTitle,
    meta: {
      publicPage: true,
      title: 'Login',
    },
  },

  {
    path: '/password/reset/confirm/:uid/:token',
    name: 'redefinir-senha',
    component: PageResetPassword,
    beforeEnter: setTitle,
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
    beforeEnter: setTitle,
    component: () => import('pages/Blank/PageBlank.vue'),
    meta: {
      publicPage: true,
    },
  },
]

export default routes
