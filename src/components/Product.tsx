import React from 'react'
import { useSelector } from 'react-redux';
import { productItems } from '../store/state'
import { store,addProduct } from '../store/store';
export const Product = () => {
    const products = useSelector((state: productItems[]) => state);
    return (<>
            <div className="container text-center ">

                <div className="row ">
        {products.map((product: productItems) => (
                    <div className="col-sm-12 col-md-4">
                        <div className="card mt-5 " >
                            <img src={product.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.description}</p>
                                <h5 className="card-title">$ {product.price}</h5>
                                <a  className="btn btn-primary"
                                onClick={() => store.dispatch(addProduct(product))}
                                >Add To Cart</a>
                            </div>
                        </div>
                    </div>

))}
</div>
</div>
    </>)
}
