import { createContext, useState,useEffect } from "react";

import {getCategoriesAndDocuments}from '../utils/firebase/firebase.utils';




export const CategoriesCotext= createContext({
    categoryMap:{},
});

export const CategoriesProvider=({children})=>{

    const [categoryMap,setCategoryMap]=useState({});

    useEffect(()=> {
     
    const getCategoriesMap = async()=>{
        const categoryMap = await  getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoryMap(categoryMap);
    }

    getCategoriesMap();
    },[]);

    const value={categoryMap};

  

return( 
  
<CategoriesCotext.Provider value={value}>
    {children}
</CategoriesCotext.Provider>

)
}