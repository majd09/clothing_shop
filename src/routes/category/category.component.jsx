import './category.component.scss';
import { useParams } from 'react-router-dom';

import { Fragment, useContext,useEffect,useState } from 'react';
import ProductsCard from '../../componets/products_card/products_card.components';
import { CategoriesCotext } from '../../context/categories.context';

const Category=()=>{

const {category}=useParams();
const {categoriesMap}=useContext(CategoriesCotext);
const [products,setProducts]=useState(categoriesMap[category]);

useEffect(()=>{

setProducts(categoriesMap[category]);
},[categoriesMap,category])
return (
            <Fragment>
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>

            <div className='category-containers'>
              
              {
                  products &&
                  products.map((product)=>( <ProductsCard  key={product.id} product={product}/>  ))
              
              }
              </div>

            </Fragment>
      
       
)
}

export default Category;