import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import Card from "./Card.js";
import { Row, Col } from "react-bootstrap"
import { Container } from '@mui/system';
import products from "./Products.js"
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/').then(res => {
            setProducts(res.data);
        })
    }, []);

    return (
        <div className="container">
            <div class="row">
                <Container >
                <div class='row'>
                    {products.map((product) => {
                        return(
                            
                            
                                <Card 
                                title={product.productName}
                                id={product._id}
                                images={product.productImage}
                                unitPrice={product.unitPrice}
                                // description={product.description}
                                />
                            
                            
                        )
                    })}
                </div>
                </Container>
                
            
            </div>
        </div>
    );
}
export default HomePage;