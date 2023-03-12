const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    
    productName: String,
    productImage: String,
    description: String ,
    unitPrice: String,
    quantity:String,

});
module.exports = mongoose.model('Product', ProductSchema);