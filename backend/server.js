const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product.js');
const Cart = require('./models/Cart.js');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const mongo_url = "mongodb+srv://jeelpatel:jeelpatel@cluster0.ipz1skx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('connected to mongodb'))
.catch((error) => console.error(error));


app.get('/', (req, res) => {
    Product.find({})
        .then((data) => { res.send(data) })
        .catch((err) => { res.send(err); });
});

app.post('/create', (req, res) => {
    new Product({
        productName: "aaa",
    productImage: "//",
    description: "descv" ,
    unitPrice: "123123",
    quantity: "123123.123",
    }).save()

    res.send(true)
})

app.get('/product/:id', (req, res) => {
    var pId = req.params.id;
    console.log(pId, " printing_pid")
    Product.find({ _id: pId})
        .then((data) => { res.send(data?.[0]) })
        .catch((err) => { res.send(err); });
});

app.get('/cart', (req, res) => {
    Cart.find({})
        .then(async (data) => { 
            if(data){
                const cartData = await Promise.all(data.map(async (cart)=>  {
                    const product = await Product.findOne({_id: cart.productId});
                    if(product) {
                        return  {
                            product: product,
                            quantity: cart.quantity
                        }
                    }
                }))
                res.send(cartData);
            }
         })
        .catch((err) => { res.send(err); });
});

app.post('/addorUpdateCart', async (req,res) => {
    const { productId, quantity } = req.body;
    const findProductCart = await Cart.findOne({ productId: productId });
    if(findProductCart) {
        findProductCart.quantity = quantity;
        await findProductCart.save();
        res.send(true);
    }
    else {
        const newCart = new Cart({
            productId: productId,
            quantity: quantity
        })
        await newCart.save();
        res.send(true);
    }
})

app.listen(PORT, () => {
    console.log(`Running on 3001`);
})