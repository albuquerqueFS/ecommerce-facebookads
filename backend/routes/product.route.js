let router = require('express').Router();

let productController = require('../controller/product.controller');

router.route('/')
    .get(productController.index)
    .post(productController.new);

router.route('/:user_id')
    .get(productController.view)
    .patch(productController.patch)
    .put(productController.patch)
    .delete(productController.delete);

module.exports = router;