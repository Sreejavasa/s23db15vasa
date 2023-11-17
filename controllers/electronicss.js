const electronics = require('../models/electronics');

// Handle a show one view with id specified by query
exports.electronics_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await electronics.findById( req.query.id)
    res.render('electronicssdetail',
   { title: 'Electronics Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.electronics_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electronicscreate', { title: 'electronics Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a costume.
// query provides the id
exports.electronics_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await electronics.findById(req.query.id)
    res.render('electronicsupdate', { title: 'electronics Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle a delete one view with id from query
exports.electronics_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await electronics.findById(req.query.id)
    res.render('electronicsdelete', { title: 'electronics Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };