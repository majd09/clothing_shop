import './products_card.styles.scss';
import Button from '../button/button.component';

const ProductsCard=({product})=>{
const {name,imageUrl,price}=product;
return (
    <div className='products-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name' >{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted'> add to the card </Button>

    </div>
)

}

export default ProductsCard ; 