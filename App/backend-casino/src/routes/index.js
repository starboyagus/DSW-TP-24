const express = require('express');

const userRouter = require ('./user.router');
const countryRouter = require ('./country.router');
const provinceRouter = require ('./province.router');
const cityRouter = require ('./city.router');
const categoryRouter = require ('./category.router');
const gameRouter = require ('./game.router');

const loginRouter = require ('./login.router');

const authRouter = require ('./auth.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/countries', countryRouter);
    router.use('/users', userRouter);
    router.use('/provinces', provinceRouter);
    router.use('/cities', cityRouter);
    router.use('/categories', categoryRouter);
    router.use('/games', gameRouter);


    router.use('/login', loginRouter);
    router.use('/register', authRouter);
    
}

module.exports = routerApi;