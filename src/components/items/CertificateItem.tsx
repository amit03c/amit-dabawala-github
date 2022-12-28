import React from 'react';

type AppProps = {
  id:number;
  title:string;
  discountPercent:number;
  price:number;
}

const CertificateItem = ({id, title, discountPercent, price} : AppProps) => {
  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id={"more-program-"+(id)} />
        <label className="form-check-label" htmlFor={"more-program-"+(id)}>
          <h6>{title}</h6>
          <div className="program-price-info">
            <span className="discounted-price">INR {price - (price * discountPercent / 100)}</span> <del className="acutal-price">{price}</del>
            <span className="savings-amount">You Save {price * discountPercent / 100}</span>
          </div>
        </label>
      </div>
    </>
  );
};

export default CertificateItem;