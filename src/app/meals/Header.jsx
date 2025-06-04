import { useContext, useEffect, useState } from 'react'
import CartContext from '../Context/CreateContext.jsx'
 import Button from '../UI/Button.jsx'
 export default function Headers(){
 const cartCtx  =    useContext(CartContext);
 const totalCartQuantity = cartCtx.items.reduce((totalNmberOfCart,item)=>{
  return totalNmberOfCart + item.quantity;
 },0);


    return (

   <header id="main-header">

    <div id="title">
    <img src="/assets/logo.jpg" alt="Logo"  />
    <h1>Yummy Foods</h1>
    </div>
   <nav>  
    <Button textOnly>Cart({totalCartQuantity})</Button>
   </nav>
   
 
   </header>
       
 
    )
 }