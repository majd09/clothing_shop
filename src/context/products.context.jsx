import { createContext, useState } from "react";


import Products from '../SHOP_DATA.json'


export const ProductsCotext= createContext({
    products:[],
});

export const ProductsProvider=({children})=>{

    const [products,setProducts]=useState(Products);
    const value={products};
return( 
  
<ProductsCotext.Provider value={value}>
    {children}
</ProductsCotext.Provider>

)
}