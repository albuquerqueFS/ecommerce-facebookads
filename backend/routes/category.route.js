let router = require('express').Router();

let categoryController = require('../controller/category.controller.controller');

router.route('/')
    .get(categoryController.index)
    .post(categoryController.new);

router.route('/:category_id')
    .get(categoryController.view)
    .patch(categoryController.patch)
    .put(categoryController.patch)
    .delete(categoryController.delete);

module.exports = router;