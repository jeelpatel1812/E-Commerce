import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Card.css';
export default function Card(props) {
    let newClassName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    // let { name,price,description,image,quantity } = props
    let { title, unitPrice, dollar = '$', description, isFromCart=false, cartQuantity, productId } = props
   
    const [cq, setCq] = useState(parseInt(cartQuantity));

    useEffect(() => {
        if(productId) {
            axios({
                method: 'post',
                url: 'http://localhost:3001/addorUpdateCart',
                data: {
                productId: productId,
                quantity: cq
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
              productId: props.id,
              quantity: '1'
            }
          }).then(res => {
            console.log("sucessfully added")
          })
    }

    return (

        <div className="card" >
            <div className="wrapper">
                <div className={newClassName}></div>
                <div className="card_img" style={{ "backgroundImage": bg_img }}></div>
                
                <div className="cardInfo">
                    <Link to={"/product/" + props.id}>
                        <h1>{title}</h1>
                    </Link>

                    <p className="date_">{description}</p>
                    {/* <div className="action"> */}
                        <div className="pr">
                            Price :{unitPrice}
                        </div>
                        <div className="cart">
                            
                            
                            {isFromCart && (
                                <>      
                                {cq}                         
                                <button className="btn" onClick={() => setCq(cq + 1)}>+</button>
                                <button className="btn" onClick={() => setCq(cq - 1)}>-</button>
                                </>

                            )}
                        </div>
                        <button className="addCart" onClick={addToBasket}>Add to Cart</button>

                    {/* </div> */}
                </div>
            </div>
            
        </div>
        
    )
}