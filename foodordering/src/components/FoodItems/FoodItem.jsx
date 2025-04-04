import React, { useContext } from 'react'
import './FoodItem.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

  const navigate = useNavigate();
const{cartItem,addToCart,removeFromCart,url}=useContext(StoreContext)

const goToCart = () => {
  navigate('/cart');
}

  return (
    <div className="food-item">
     
        <div className="food-item-img-container">
<img  className="food-item-image" src={url + "/images/"+image} alt="" />

{!cartItem[id]
?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
:
<div className='food-item-counter'>
<img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
<p>{cartItem[id]}</p>
<img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
{Object.keys(cartItem).length > 0 && (
                <button 
                    className="go-to-cart-btn" 
                    onClick={goToCart}
                >
                    Go to Cart
                </button>
            )}
</div>
}
        </div>
<div className="food-item-info">
    <div className="food-item-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
    </div>
    <p className="food-item-description">{description}</p>
    <p className="food-item-price">₹{price}</p>
</div>
        </div>  
  )
}

export default FoodItem
