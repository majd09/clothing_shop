import CategoryPreview from '../../componets/category-preview/category-preview.component'
import {useContext} from 'react';
import { CategoriesCotext } from '../../context/categories.context';
import './shop.styles.scss'
const Shop = ()=>{
const {categoriesMap}= useContext(CategoriesCotext);
return (

<div className='shop-container'>
        {  Object.keys(categoriesMap ).map((title)=>{
                const products= categoriesMap[title];
                return( 
                <CategoryPreview title={title} products={products} key={title}/>
                );
            }
               
        )
    }

</div>
);
}

export default Shop