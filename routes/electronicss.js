var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronicss_controller = require('../controllers/electronicss');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electronics ROUTES ///
// POST request for creating a electronics.
router.get('/detail', electronicss_controller.electronics_view_one_Page);

router.get('/create', electronicss_controller.electronics_create_Page);

router.get('/update', electronicss_controller.electronics_update_Page);

router.get('/delete', electronicss_controller.electronics_delete_Page);


module.exports = router;