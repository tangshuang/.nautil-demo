import { createHttp } from 'nautil/ssr'
import App from '../app/app.jsx'
import navigation from '../app/navigation.js'
import depo from '../app/depo.js'
import i18n from '../app/i18n.js'

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'

const app = express()
const http = createHttp(App, {}, {
  navigations: [
    navigation,
  ],
  depositories: [
    depo,
  ],
  i18ns: [
    i18n,
  ],
  async onRequest(req) {
    const { status, state } = navigation

    depo.setConfig({
      baseURL: 'http://127.0.0.1:9000',
    })

    if (status) {
      const { name } = state
      if (name === 'page1') {
        await depo.request('info')
      }
    }
  },
})

if (process.env.NODE_ENV === 'development') {
  const config = require('../../.nautil/before.hook')()
  config.devServer.before(app)
}

app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use('*', http)

app.listen(9000)
