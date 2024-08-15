const loginService = require('../services/login.service')
const service = new loginService();
const jwt = require('jsonwebtoken')


const signInUser = async (req, res) => {
    try{
        const { username, password } = req.body;

        //Verificar Usuario
        const user = await service.findUser(username)
        if (!user) {
            return res.status(404).json('Username not found');
        }

        //Verificar Password
        const passwordValid = await service.compare(username, password)
        if (!passwordValid) {
            return res.status(404).json('Incorrect Username and Password combinations')
        }


        //Autentificar con JWT
        const token = jwt.sign({ foo: 'bar' }, 'agus');

        //send status
        res.status(200).send({
            username: user.username,
            first_name: user.first_name,
            email: user.email,
            accessToken: token
        })
    } catch (err) {
        return res.status(500).send('Sign in error')
    }
}

module.exports = { signInUser }