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
router.get('/detail',secured, electronicss_controller.electronics_view_one_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/create',secured, electronicss_controller.electronics_create_Page);

router.get('/update',secured, electronicss_controller.electronics_update_Page);

router.get('/delete',secured, electronicss_controller.electronics_delete_Page);


module.exports = router;