var electronics = require('../models/electronics');
// // List of all electronics
exports.electronics_list = async function(req, res) {
    try{
    electronics= await electronics.find();
    res.send(electronics);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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