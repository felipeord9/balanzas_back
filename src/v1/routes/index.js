const express = require('express')
const UserRoutes = require('./userRoutes')
const MailRoutes = require('./mailRoutes')
const BalanceRoutes = require('./balanceRoutes')
const RecordRoutes = require('./recordRoutes')
const AuthRoutes = require('./authRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/auth', AuthRoutes)
    router.use('/users', UserRoutes)
    router.use('/mail', MailRoutes)
    router.use('/balance', BalanceRoutes)
    router.use('/record', RecordRoutes)

}

module.exports = routerApi