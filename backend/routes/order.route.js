let router = require('express').Router();

let orderController = require('../controller/order.controller');

router.route('/')
    .get(orderController.index)
    .post(orderController.new);

router.route('/:user_id')
    .get(orderController.view)
    .patch(orderController.patch)
    .put(orderController.patch)
    .delete(orderController.delete);

module.exports = router;