const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const purchase_order_controller = require('../controllers/purchaseorder.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', purchase_order_controller.test);
router.post('/create', purchase_order_controller.po_create);
router.get('/:bookingref', purchase_order_controller.po_details);
module.exports = router;