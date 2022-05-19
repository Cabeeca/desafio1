const express = require('express')
const app = express()
const PORT = 3000
const path = require('path');

//Body-Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Method Override
const methodOverrdie = require('method-override')
app.use(methodOverrdie('_method'))

//View Engine ejS
app.set('view engine', 'ejs')

//Definindo a pasta public como pública
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.use(require(path.resolve(__dirname, 'server', 'routes', 'route.js')))

app.listen(PORT, () => console.log(`O servidor está ativo e rodando em http://localhost:${PORT}`))