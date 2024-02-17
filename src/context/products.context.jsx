import { createContext, useState } from "react";

import {addCollectionAndDocuments}from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../SHOP_DATA.js';


export const ProductsCotext= createContext({
    products:[],
});

export const ProductsProvider=({children})=>{

    const [products,setProducts]=useState([]);

     
    const value={products};
return( 
  
<ProductsCotext.Provider value={value}>
    {children}
</ProductsCotext.Provider>

)
}