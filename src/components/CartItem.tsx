import React from 'react'
import { store, removeProduct } from '../store/store'
type CartItemProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  imageUrl,
  description,
  price,
}) => {
  return (<>
    <div className="container text-center ">
     

      <div className="row ">
        <div className="col-sm-12 col-md-12">
          <div className="card mt-5 d-flex flex-row" >
            <img src={imageUrl} className="card-img-top" style={{ width: "150px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p>{description}</p>
              <a   className="btn btn-primary"
                onClick={() => {store.dispatch(removeProduct({ id }))
                 
              }}
              >Cancel</a>
            </div>
          </div>
        </div>
      </div>

     
    </div>

  </>)
}
