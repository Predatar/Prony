import React from "react";
import "./billingWorkspaces.scss";
import TitleClient from "../components/Title/TitleClient";
import BillingItem from "./billingItem/BillingItem";
import Pagination from "../../../dashboard/postPage/main/pagination/Pagination";
const BillingWorkspaces = () => {
  return (
    <div className="billing">
      <div className="billing__body">
        <div className="billing__top">
          <TitleClient text={"Billing History"} />
        </div>
        <div className="billing__bottom">
          <form className="billing__form billing-form">
            <div className="billing-form__body">
              <div className="billing-form__top">
                <div className="billing-form__top-left">Transaction date</div>
                <div className="billing-form__top-right">Amount</div>
              </div>
              <div className="billing-form__bottom">
                <div className="billing-form__items">
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                  <BillingItem date="21 Feb 2020" price="$50" />
                </div>
                <div className="billing-form__pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingWorkspaces;
