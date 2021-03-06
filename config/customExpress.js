const express = require("express")
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = () => {
    const app = express();
    app.use((req, resp, next) => {
        resp.header("Access-Control-Allow-Origin", "*")
        resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
        app.use(cors())
        next()
    })
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign().include('controllers').into(app)

    return app
}