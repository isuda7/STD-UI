const express = require('express')
const app = express()

app.set('views', '${__dirname}/dist/')
app.engine(ext: 'html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', express.static(root: '${__dirname}/dist'))
app.get('/', (req :Request<P, ResBody, ReqBody, ReqQuery>, res : Response<ResBody>) => {res.render(view: 'index', options: {})})
