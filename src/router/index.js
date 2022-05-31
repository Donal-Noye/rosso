import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'О компании'
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    meta: {
      title: 'Каталог'
    }
  },
  {
    path: '/furniture-handles',
    name: 'Furniture Handles',
    component: () => import('../views/FurnitureHandles.vue'),
    meta: {
      title: 'Мебельные ручки'
    }
  },
  {
    path: '/novelties',
    name: 'Novelties',
    component: () => import('../views/Novelties.vue'),
    meta: {
      title: 'Новинки'
    }
  },
  {
    path: '/sale',
    name: 'Sale',
    component: () => import('../views/Sale.vue'),
    meta: {
      title: 'Распродажа'
    }
  },
  {
    path: '/drawers',
    name: 'Drawers',
    component: () => import('../views/Drawers.vue'),
    meta: {
      title: 'Выдвижные ящики'
    }
  },
  {
    path: '/brands',
    name: 'Brands',
    component: () => import('../views/Brands.vue'),
    meta: {
      title: 'Бренды'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/ProductDetail.vue'),
    meta: {
      title: 'Товар'
    }
  },
  {
    path: '/guaranty',
    name: 'Guaranty',
    component: () => import('../views/Guaranty.vue'),
    meta: {
      title: 'Гарантии'
    }
  },
  {
    path: '/facades',
    name: 'Facades',
    component: () => import('../views/Facades.vue'),
    meta: {
      title: 'Фасады Главная'
    }
  },
  {
    path: '/facades-catalog',
    name: 'Facades Catalog',
    component: () => import('../views/FacadesCatalog.vue'),
    meta: {
      title: 'Фасады Каталог'
    }
  },
  {
    path: '/facade/:id',
    name: 'Facade',
    component: () => import('../views/FacadeDetail.vue'),
    meta: {
      title: 'Фасад'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
    meta: {
      title: 'Контакты'
    }
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('../views/Exchange.vue'),
    meta: {
      title: 'Обмен / возврат'
    }
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../views/Delivery.vue'),
    meta: {
      title: 'Доставка'
    }
  },
  {
    path: '/contract-offer',
    name: 'Contract Offer',
    component: () => import('../views/ContractOffer.vue'),
    meta: {
      title: 'Договор оферты'
    }
  },
  { 
    path: '/:notFound(.*)', 
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },

})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Rosso`
  next()
})

export default router
