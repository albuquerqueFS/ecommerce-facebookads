let router = require('express').Router();

let userController = require('../controller/user.controller');

router.route('/')
    .get(userController.index)
    .post(userController.new);

router.route('/:user_id')
    .get(userController.view)
    .patch(userController.patch)
    .put(userController.patch)
    .delete(userController.delete);

module.exports = router;