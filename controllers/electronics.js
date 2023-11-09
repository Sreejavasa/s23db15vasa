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
// Handle Costume create on POST.
exports.electronics_create_post = async function(req, res) {
    console.log(req.body)
    let document = new electronics();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.productname = req.body.productname;
    document.manufacturer = req.body.manufacturer;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle electronics delete form on DELETE.
exports.electronics_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
exports.electronics_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try{
        electronics = await electronics.find();
    res.render('electronics', { title: 'electronicsSearch Results', rest: electronics});
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };