import './checkout-item.style.scss' ;
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem= ({cartItem})=>{
const {name,price ,imageUrl ,quantity}=cartItem;

const {clearItemFromCart,addItemToCart,removeItemToCart}=useContext(CartContext);
const  clearItemHandler= ()=>clearItemFromCart(cartItem);

const addItemHndler=()=>addItemToCart(cartItem);

const removeItemHndler=()=>removeItemToCart(cartItem);

return(


    <div className='checkout-item-container'>

        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHndler}>
                &#10094;
                </div>
               <span className='value' > {quantity} </span> 
                <div className='arrow' onClick={addItemHndler}> 
                &#10095;
                 </div>
                </span>
            <span className='price'>{price}</span>
               <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>

    </div>
)


}

export default CheckoutItem