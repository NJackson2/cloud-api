import functions from 'firebase-functions'
import express from 'express'
import { createUser } from './src/users.js'

const app = express()

app.get('/test', (req, res) => res.send('Our first cloud API works, MF!'))

app.post('/users', createUser)

export const api = functions.https.onRequest(app)


