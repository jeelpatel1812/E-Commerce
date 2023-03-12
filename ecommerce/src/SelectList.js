import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './SelectList.css';

export default function SelectList(props) {
    let newClassName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    // let { name,price,description,image,quantity } = props
    let { title, image ,unitPrice, isFromCart=false, cartQuantity, productId } = props
   
    const [cq, setCq] = useState(parseInt(cartQuantity));
    
    console.log(title);
    useEffect(() => {
        if(productId) {
            axios({
                method: 'post',
                url: 'http://localhost:3001/addorUpdateCart',
                data: {
                productId: productId,
                quantity: cq,
                
                }
            }).then(res => {
                console.log("sucessfully added")
            })
        }
    }, [cq]);

    const addToBasket = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/addorUpdateCart',
            data: {
              productId: props.productId,
              quantity: cq
            }
          }).then(res => {
            console.log("sucessfully added")
          })
    }

    return (
        <div className="lineList">
        <div className='inLine' >
            
                <div className="cardInfo">
                    <h1>{title}</h1>
                    
                            <p className="price newPrice">Price : {unitPrice}</p>
                        
                        <div>Total quantity : <b>{cq}</b></div>
                        <div>Total Amount : {unitPrice*cq}</div>
                         
                            {isFromCart && (
                                <>      
                                                        
                                <button className="btn" onClick={() => setCq(cq + 1)}>+</button>
                                <button className="btnmns" onClick={() => setCq(cq - 1)}>-</button>
                                </>

                            )}
                        
                 </div>
                 
        </div>
        <button className="addCart" onClick={addToBasket}>Add to Cart</button>
        </div>
        
    )
}