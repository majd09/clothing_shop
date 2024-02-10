import './products_card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';



const ProductsCard=({product})=>{
const {name,imageUrl,price}=product;
const {addItemToCart}=useContext(CartContext);
const addProductToCart=()=>addItemToCart(product);
return (
    <div className='products-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name' >{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}> add to the card </Button>

    </div>
)

}

export default ProductsCard ; 