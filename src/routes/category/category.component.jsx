import './category.component.scss';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CategoriesCotext } from '../../context/categories.context';
import { useContext,useEffect,useState } from 'react';
import ProductsCard from '../../componets/products_card/products_card.components';
const Category=()=>{

const {category}=useParams();
const {categoriesMap}=useContext(CategoriesCotext);
const [products,setProducts]=useState(categoriesMap[category]);

useEffect(()=>{

setProducts(categoriesMap[category]);
},[categoriesMap,category])
return (


        <div className='category-containers'>

            {
                products &&
                products.map((product)=>{  <ProductsCard  key={product.id} product={product}/> } )
            
            }
            </div>
)
}

export default Category;