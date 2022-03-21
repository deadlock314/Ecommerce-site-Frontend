import React from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../Styles/CartStyles/CartPS.css';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice, removeCartData } from '../ReduxCode/Reducers';
import PriceCalc from './PriceCalc';
import { priceAdder } from '../HelperFun/priceAdder';

const CartWithProduct = () => {

  const cartData = useSelector((state) => state.cartData);

  const dispatch = useDispatch()

  const cartState = cartData.prevCartData || [];

  const CartDelClickHandler = (e) => {
    e.preventDefault();

    const id = e.target.name;

    dispatch(removeCartData(id));
    dispatch(updatePrice({
      countObj: { id, count: 1 },
      totalPrice: priceAdder(cartData.totalPrice, e.target.className, 'sub', cartData.countObj[id] || 1)
    }))

  };


  return (
    <>
      {
        cartState.map((cartProduct) => {
          return (
            <div key={cartProduct._id}>
              {(cartProduct.imgLink) ?
                <div id='main-cart-component'>
                  <CartProductStruct props={cartProduct} />
                  <ProductCounter props={cartProduct} />
                  <button id='cart-del-btn' className={cartProduct.price} name={cartProduct._id} onClick={CartDelClickHandler}>Remove</button>
                </div>
                : <></>
              }</div>
          );
        })
      }
      <PriceCalc />
    </>
  );
}

export default CartWithProduct;