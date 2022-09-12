import React from 'react'
import { CartItem } from './CartItem'
import { productItems } from '../store/state'
import { useSelector } from 'react-redux';

export const Basket = () => {
  const products = useSelector((state: productItems[]) => state);
  return (
    <div>
      <div className="container text-center ">
        <h1 style={{ marginTop: "50px" }}>Shopping Basket</h1>
        <h3> You have {products.filter((product) => product.added).length} items in your basket</h3>
        {products
          .filter((product) => product.added)
          .map((product: productItems) => (
            <CartItem
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        <h1 style={{ marginTop: "50px" }}>Total : ${(
          products
            .filter((product) => product.added)
            .reduce((acc, current) => (acc += current.price), 0) 
        ).toFixed(2)}</h1>
      </div>
    </div>
  )
}
