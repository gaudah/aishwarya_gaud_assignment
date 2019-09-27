
const controller = require('../Controller/controllerHapi.js')

module.exports = [
    { method: 'POST', path: '/signup', handler: controller.userInsert },
    { method: 'POST', path: '/login', handler: controller.loginDetails },

];




