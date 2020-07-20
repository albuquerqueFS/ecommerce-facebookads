let router = require('express').Router();

let addressController = require('../controller/address.controller');

router.route('/')
    .get(addressController.index)
    .post(addressController.new);

router.route('/:address_id')
    .get(addressController.view)
    .patch(addressController.patch)
    .put(addressController.patch)
    .delete(addressController.delete);

module.exports = router;