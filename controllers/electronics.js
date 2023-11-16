const electronics = require('../models/electronics');
var Electronics = require('../models/electronics'); // Assuming 'electronics' is the model

// List of all electronics
exports.electronics_list = async function(req, res) {
    try {
        const electronics = await Electronics.find();
        res.send(electronics);
    } catch (err) {
        res.status(500).send(`{"error": ${err}`);
    }
};

// Get a specific electronics by ID
exports.electronics_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try {
        const result = await electronics.findById(req.params.id);
        if (!result) {
            res.status(404).send(`{"error": "Document for ID ${req.params.id} not found"}`);
        } else {
            res.send(result);
        }
    } catch (error) {
        res.status(500).send(`{"error": ${error}`);
    }
};

// Handle electronics create on POST
exports.electronics_create_post = async function(req, res) {
    console.log(req.body);
    const document = new Electronics();
    document.productname = req.body.productname;
    document.manufacturer = req.body.manufacturer;
    document.price = req.body.price;
    try {
        const result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}`);
    }
};

// Handle electronics delete form on DELETE
exports.electronics_delete = async function(req, res) {
    try {
        const result = await Electronics.findByIdAndDelete(req.params.id);
        if (!result) {
            res.status(404).send(`{"error": "Document for ID ${req.params.id} not found"}`);
        } else {
            res.send(`{"message": "Document for ID ${req.params.id} deleted"}`);
        }
    } catch (error) {
        res.status(500).send(`{"error": ${error}`);
    }
};

// Handle electronics update form on PUT
exports.electronics_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await electronics.findById( req.params.id)
    // Do updates of properties
    if(req.body.productname) toUpdate.productname = req.body.productname;
    if(req.body.manufacturer) toUpdate.manufacturer = req.body.manufacturer;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try {
        const electronics = await Electronics.find();
        res.render('electronics', { title: 'electronics Search Results', rest: electronics });
    } catch (err) {
        res.status(500).send(`{"error": ${err}`);
    }
};
