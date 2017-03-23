// @flow

import compression from 'compression'
import express from 'express'
import { Server } from 'http'
import socketIO from 'socket.io'

import routing from './routing'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import setUpSocket from './socket'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'



const cookieSession = require('cookie-session')

const app = express()
app.use(bodyParser.json())
app.use(cookieSession({ secret: 'keyboardcat' }))
// flow-disable-next-line
const http = Server(app)
const io = socketIO(http)
// setUpSocket(io)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
