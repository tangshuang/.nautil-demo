import { createHttp } from 'nautil/ssr'
import App from '../app/app.jsx'
import navigation from '../app/navigation.js'
import depo from '../app/depo.js'

import express from 'express'
import path from 'path'

depo.setConfig({
  baseURL: 'http://127.0.0.1:9000'
})

const app = express()
const http = createHttp(App, {}, {
  navigations: [
    navigation,
  ],
  depositories: [
    depo,
  ],
  async onRequest(req) {
    const { status, state } = navigation
    if (status) {
      const { name } = state
      if (name === 'page1') {
        const data = await depo.request('info')
        this.info = data
      }
    }
  },
})

if (process.env.NODE_ENV === 'development') {
  const proxy = require('../../.nautil/dev-server.config')
  proxy.before(app)
}

app.use(express.static(path.resolve(__dirname, 'public')))
app.use('*', http)

app.listen(9000)
