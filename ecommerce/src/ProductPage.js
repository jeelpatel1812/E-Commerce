import React, { useEffect, useState } from 'react'
import './ProductPage.css';
// import { useStateValue } from "./StateProvider";
import {useParams} from "react-router-dom"
// import Products from "./Products.js"
import axios from 'axios';
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import { width } from '@mui/system';

function ProductPage({}) {

    const {id} = useParams();
    console.log(id+"kdnejfr");
    const [product, setProduct] = useState();
   
    

    useEffect(() => {
        
        axios.get('http://localhost:3001/product/' + id).then(res => {
            setProduct(res.data);
            console.log(res.data + "res_data");
        })
    }, [])

    const addToBasket = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/addorUpdateCart',
            data: {
              productId: product._id,
              quantity: '1'
            }
          }).then(res => {
            console.log("sucessfully added")
          })
    }
    const [quantity,setquantity]=useState(0);
    console.log(product);
    if(!product) return <></>
    return (
        
        
        <React.Fragment>

               
                <div className="container">

                    <div className="imgContainer">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.productImage}  />
                        </Link>
                    </div>
                    
                    <div className="detailContainer">
                        
                        <div className="pprice">Unit Price : {product.unitPrice}</div>
                        <div className="desc"> {product.description}</div>
                        <div className="desc"> Quantity : {product.quantity}</div>
                        <button className="addCart" onClick={()=>addToBasket()}>Add to Cart</button>
                        {/* <div>{quantity}</div>
                        <button className="btn" onClick={() => setquantity(quantity + 1)}>+</button>
                        <button className="btnmns" onClick={() =>setquantity(quantity - 1)}>-</button> */}
                    </div>
                </div>
                    <div className="pname">{product.productName}</div>
                

                
                    
                        
                
        </React.Fragment>

    )
}

export default ProductPage