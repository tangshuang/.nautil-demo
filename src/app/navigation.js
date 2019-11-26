import { Navigation } from 'nautil'
import { Text } from 'nautil/components'

import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'
import Page3 from './pages/page3.jsx'
import Page4 from './pages/page4.jsx'
import Page5 from './pages/page5.jsx'
import Page6 from './pages/page6.jsx'
import Page7 from './pages/page7.jsx'

import Home from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'

const navigation = new Navigation({
  base: '/',
  mode: process.env.RUNTIME_ENV === 'dom' || process.env.RUNTIME_ENV === 'ssr' || process.env.RUNTIME_ENV === 'ssr-client' ? 'history' : 'none',
  searchKeep: ['lng'],
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'page1',
      path: '/page1',
      component: Page1,
    },
    {
      name: 'page2',
      path: '/page2/:id/:action?',
      component: Page2,
    },
    {
      name: 'page3',
      path: '/page3',
      component: Page3,
    },
    {
      name: 'page4',
      path: '/page4/:id?',
      component: Page4,
    },
    {
      name: 'page5',
      path: '/page5',
      component: Page5,
    },
    {
      name: 'page6',
      path: '/page6',
      component: Page6,
    },
    {
      name: 'page7',
      path: '/page7',
      component: Page7,
      children: [
        {
          name: 'child',
          path: '/child',
          children: [
            {
              name: 'subchild',
              path: '/subchild',
            },
            {
              name: 'subchild2',
              path: '/subchild2',
              component: () => <Text>subchild2</Text>,
            },
          ],
        },
        {
          name: 'child1',
          path: '/child1',
        },
        {
          name: 'child2',
          path: '/child2',
        },
      ],
    },
  ],
  notFound: NotFound,
  maxHistoryLength: 20,
  defaultRoute: 'home',
})

export default navigation
