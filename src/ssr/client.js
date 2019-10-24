import '../web/index.less'
import { hydrate } from 'nautil/dom-ssr'
import App from '../app/app.jsx'
import navigation from '../app/navigation.js'
import depo from '../app/depo.js'

hydrate('#app', App, {}, {
  navigations: [
    navigation,
  ],
  depositories: [
    depo,
  ],
  onHydrate() {
    const { status, state } = navigation
    if (status) {
      const { name } = state
      if (name === 'page1') {
        const { info } = this
        depo.set('info', {}, info)
      }
    }
  },
})
