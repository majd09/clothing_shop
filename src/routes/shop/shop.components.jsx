import ProductsCard from '../../componets/products_card/products_card.components';

import {useContext,Fragment} from 'react';
import { CategoriesCotext } from '../../context/categories.context';
import './shop.styles.scss'
const Shop = ()=>{
const {categoryMap}= useContext(CategoriesCotext);
return (

<Fragment>

    

        { 
            Object.keys(categoryMap).map((title)=>
                <Fragment key={title}>

                    <h2>{title} </h2>
                    <div className='products-container' >
                           {categoryMap[title].map((product) =>(
                        <ProductsCard key={product.id} product={product}/>
                        

                            ) ) } 
                        </div>
                </Fragment>
        )
    }

</Fragment>
);
}

export default Shop