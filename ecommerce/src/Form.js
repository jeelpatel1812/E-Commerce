import React ,{useState}from 'react'
import { useFormik } from 'formik';
import { Paper } from '@mui/material';
import axios from 'axios';


 const Form = () => {

    const [productName,setProductName]=useState("");
    const [description,setDescription]=useState("");
    const [unitPrice,setUnitPrice]=useState();
    const [quantity,setQuantity]=useState();
    const [productImage,setProductImage]=useState();
   const handleSubmit=(values)=>{

       const payload={
            productName,
            productImage,
            description,
            unitPrice,
            quantity
       }
       console.log("hii",values)
       try{
                

                axios
                .post('http://localhost:3001/create',payload)
                .then((response) => {
                    console.log("done...",response);
                    setDescription("");
                    setProductName("");
                    setQuantity(0);
                    setUnitPrice(0);
                    setProductImage("");
                });

                
        }
        catch(err){
            console.log("error",err);
            
        }
        
   }
   
   return (
     <form >

        <Paper elevation={5} style={{margin:"40px auto",padding:"10px",display:"flex",justifyContent:"center",width:"fit-content"}}>

        <div style={{width:"200px"}}>

            <label htmlFor="text">Product Name : </label>
            <input
                id="productName"
                name="productName"
                type="text"
                onChange={(e)=>{setProductName(e.target.value)}}
                value={productName}
            />

            <label htmlFor="text">Product Image : </label>
            <input id="productImage"
                name="productImage"
                type="file"
                onChange={(e)=>{setProductImage(e.target.value)}}
                value={productImage}/>

            <label htmlFor="text">description : </label>
            <input
                id="description"
                name="description"
                type="textarea"
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
            />

            <label htmlFor="text">Product Price : </label>
            <input
                id="unitPrice"
                name="unitPrice"
                type="number"
                onChange={(e)=>{setUnitPrice(e.target.value)}}
                value={unitPrice}
            />


            <label htmlFor="text">Product Quantity : </label>
            <input
                id="quantity"
                name="quantity"
                type="number"
                onChange={(e)=>{setQuantity(e.target.value)}}
                value={quantity}
            />
        
            <button type="submit" onClick={()=>handleSubmit()}>Submit</button>

       </div>
        </Paper>
     </form>
   );
 };

export default Form;