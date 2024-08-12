const dev = process.env.development

const menuList = [
  {
    title: 'Associados',
    nivel: 0,
    icon: 'svguse:/icons.svg#icon_users',
    // href: '/home',
    name: 'home',
  },
  {
    title: 'Resumo',
    nivel: 0,
    icon: 'svguse:/icons.svg#icon-chart-statistics',
    // href: '/home',
    name: 'resumo',
  },
  {
    title: 'Movimentações',
    nivel: 0,
    icon: 'svguse:/icons.svg#icon_chart_up',
    // href: '/home',
    name: 'movimentacoes',
  },

  // {
  //   title: 'Financeiro',
  //   nivel: 0,
  //   icon: 'credit_score',
  //   submenu: [
  //     {
  //       title: 'Calendário de Produção',
  //       nivel: 1,
  //       add: '#',
  //       list: '#',
  //     },
  //     {
  //       title: 'Produtos  nivel: 1',
  //       nivel: 1,
  //       submenu: [
  //         {
  //           title: 'Produtos nivel: 2',
  //           nivel: 2,
  //         },
  //         {
  //           title: 'Sub Produtos',
  //           nivel: 2,
  //         },
  //         {
  //           title: 'Insumo',
  //           nivel: 2,
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Previsão de Consumo   nivel: 1,',
  //       nivel: 1,
  //       submenu: [
  //         {
  //           title: 'Previsão de Consumo  nivel: 2',
  //           nivel: 2,
  //         },
  //       ],
  //     },
  //     {
  //       title: 'NF de entrada',
  //       // link: 'https://www.google.com',
  //       nivel: 1,
  //       submenu: [
  //         {
  //           title: 'NF de entrada',
  //           // link: 'https://www.google.com',
  //           nivel: 2,
  //         },
  //       ],
  //     },
  //   ],
  // },
]

if (dev)
  menuList.push(
    {
      separator: true,
      title: 'a',
      type: 'dev',
    },

    {
      title: 'StoryBook',
      nivel: 0,
      icon: 'design_services',
      href: 'http://localhost:',
      type: 'dev',
    },
    {
      title: "Svg's",
      nivel: 0,
      icon: 'auto_awesome_motion',
      name: 'svgs',
      type: 'dev',
    },
    
    {
      title: 'Testes',
      nivel: 0,
      icon: 'bug_report',
      name: 'testes',
      type: 'dev',
    }
  )

export default menuList
