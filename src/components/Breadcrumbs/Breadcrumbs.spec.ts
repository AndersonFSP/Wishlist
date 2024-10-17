import { render, screen } from '@testing-library/vue'
import Breadcrumbs from './Breadcrumbs.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { defineComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: defineComponent({ template: `<div></div>` }),
      name: 'Home',
    },
    {
      path: '/teste',
      component: defineComponent({ template: `<div></div>` }),
      name: 'teste',
      meta: {
        breadcrumbs: ['Home', 'Wishlist'],
      },
    },
  ],
})

describe('Button', () => {
  beforeEach(() => vi.clearAllMocks())
  const renderBreadcrumbs = async () => {
    router.push({ name: 'teste' })
    await router.isReady()
    return render(Breadcrumbs, { global: { plugins: [router] } })
  }
  it('should render Breadcrumbs', async () => {
    await renderBreadcrumbs()
    screen.getByText('Home')
    screen.getByText('/')
    screen.getByText('Wishlist')
  })
})
