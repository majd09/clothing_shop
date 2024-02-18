import CategoryPreview from '../../componets/category-preview/category-preview.component'
import {useContext,Fragment} from 'react';
import { CategoriesCotext } from '../../context/categories.context';



const CategoriesPreview = ()=>{
const {categoriesMap}= useContext(CategoriesCotext);
return (

<Fragment>
        {  Object.keys(categoriesMap ).map((title)=>{
                const products= categoriesMap[title];
                return( 
                <CategoryPreview title={title} products={products} key={title}/>
                );
            }
               
        )
    }

</Fragment>
);
}

export default CategoriesPreview;