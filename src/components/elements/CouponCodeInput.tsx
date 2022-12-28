import React from 'react';

const CouponCodeInput = () => {
  return (
    <>
      <h6 className="text-dark" style={{ fontSize: "14px" }}>Got a Coupon Code?</h6>
      <div className="apply-coupon input-group mb-4">
        <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Enter Coupon Code" aria-describedby="coupon" />
        <button className="btn btn-light" type="button" id="coupon">Apply Coupon</button>
      </div>
    </>
  );
};

export default CouponCodeInput;