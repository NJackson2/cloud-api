import functions from 'firebase-functions' // these are the cloud functions
import express from 'express'
import { createUser, getAllUsers, updateUser } from './src/users.js'

const app = express()
app.use(express.json())

app.get('/test', (req, res) => res.send('Our first cloud API works, MF!'))
app.get('/users', getAllUsers)

app.post('/users', createUser)

app.patch('/users/: uid', updateUser)

export const api = functions.https.onRequest(app)
// deploying our api to the cloud, listening through routes. 
// We use api in the firebase.json file


