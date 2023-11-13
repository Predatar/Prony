import React from "react";

const PlanTable = () => {
  return (
    <>
      <div className="plan-table__title">Your plan</div>
      <div className="plan-table">
        <div className="plan-table__body">
          <div className="plan-table__items">
            <div className="plan-table__item">
              <div className="plan-table__item-top">Plan</div>
              <div className="plan-table__item-bottom">Free</div>
            </div>
            <div className="plan-table__item">
              <div className="plan-table__item-top">Suggestions</div>
              <div className="plan-table__item-bottom">1</div>
            </div>
            <div className="plan-table__item">
              <div className="plan-table__item-top">Team members</div>
              <div className="plan-table__item-bottom">1</div>
            </div>
            <div className="plan-table__item">
              <div className="plan-table__item-top">Price</div>
              <div className="plan-table__item-bottom">Free</div>
            </div>
            <div className="plan-table__item">
              <div className="plan-table__item-top">Billing date</div>
              <div className="plan-table__item-bottom">None</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanTable;
