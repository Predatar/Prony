import React from "react";
import "./paymentWorkspaces.scss";
import PaymentItem from "./paymentItem/PaymentItem";
import TitleClient from "../components/Title/TitleClient";
import { AiOutlinePlus } from "react-icons/ai";
import ClientLinks from "../../../../UI/clientLinks/ClientLinks";
import ROUTES from "../../../../routes/const";
const PaymentWorkspaces = () => {
  return (
    <div className="payment-workspaces">
      <div className="payment-workspaces__body">
        <div className="payment-workspaces__top">
          <TitleClient text={"Payment Methods"} />
        </div>
        <form className="payment-workspaces__bottom">
          <div className="payment-workspaces__items">
            <PaymentItem />
            <PaymentItem />
            <PaymentItem />
          </div>
          <ClientLinks
            to={ROUTES.CLIENT_WORKSPACES_ADD_PAYMENT}
            icon={<AiOutlinePlus />}
            theme={"clientlink_primary"}
            width={298}
            text={"Add a new payment method"}
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentWorkspaces;
