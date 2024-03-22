import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
      <div className="shop_category">
        <img className='shopcategory_banner' src={props.banner} alt="" />
      <div className="shopcategory_index_short">
        <p>
          <span>Showing 1 -12 </span> out of 36 products
        </p>
        <div className="shopcategory_short">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        </div>
        <div className="shopcategory_product">
          {all_product.map((item,i)=>{
              if(props.category===item.category)
              {
                return <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
              }
              else{
              return null;
              }
          })}
        </div>
        <div className="shopcategory_loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory