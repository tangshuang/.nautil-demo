import '../dom/index.less'

import { hydrate } from 'nautil/ssr-client'
import App from '../app/app.jsx'
import navigation from '../app/navigation.js'
import depo from '../app/depo.js'
import i18n from '../app/i18n.js'

hydrate('#app', App, {}, {
  navigations: [
    navigation,
  ],
  depositories: [
    depo,
  ],
  i18ns: [
    i18n,
  ],
})
