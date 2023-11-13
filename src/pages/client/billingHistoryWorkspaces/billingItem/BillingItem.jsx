import React from "react";

const BillingItem = ({ date, price }) => {
  return (
    <div className="billing-item">
      <div className="billing-item__body">
        <div className="billing-item__left">{date}</div>
        <div className="billing-item__right">{price}</div>
      </div>
    </div>
  );
};

export default BillingItem;
