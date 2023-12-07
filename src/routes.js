const UserController = require("./controllers/UserController");

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listUser,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUserById,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UserController.createUser,
    },
    {
        endpoint: '/users',
        method: 'Put',
        handler: UserController.updateUser,
    },
    {
        endpoint: '/users',
        method: 'DELETE',
        handler: UserController.deleteUser,
    },
    
];
