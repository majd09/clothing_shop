import ProductsCard from '../../componets/products_card/products_card.components';

import {useContext} from 'react';
import { ProductsCotext } from '../../context/products.context';
import './shop.styles.scss'
const Shop = ()=>{
const {products}= useContext(ProductsCotext)
return (
<div className='products-container' >
    {products.map((product) =>(
<ProductsCard key={product.id} product={product}/>
   

    ) ) } 
</div>
);
}

export default Shop