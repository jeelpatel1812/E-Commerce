const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    productId: String,
    quantity: String,
});
module.exports = mongoose.model('Cart', CartSchema);