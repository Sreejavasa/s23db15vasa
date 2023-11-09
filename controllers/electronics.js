var electronics = require('../models/electronics');
// List of all electronicss
exports.electronics_list = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics list');
};
// for a specific electronics.
exports.electronics_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics detail: ' + req.params.id);
};
// Handle electronics create on POST.
exports.electronics_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics create POST');
};
// Handle electronics delete form on DELETE.
exports.electronics_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
exports.electronics_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};