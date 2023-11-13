import React from "react";
import ClientButton from "../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../UI/clientCancel/ClientCancel";
import InputClient from "../components/Input/InputClient";
import TitleClient from "../components/Title/TitleClient";
import ROUTES from "../../../routes/const";
import "./addPayment.scss";
const AddPayment = () => {
  return (
    <div className="add-payment">
      <div className="add-payment__body">
        <div className="add-payment__top">
          <TitleClient text={"Add Payment Methods"} />
        </div>
        <div className="add-payment__bottom">
          <AddPaymentForm />
        </div>
      </div>
    </div>
  );
};

export default AddPayment;

const AddPaymentForm = () => {
  return (
    <form className="add-payment-form">
      <div className="add-payment-form__body">
        <div className="add-payment-form__item">
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">Alias for credit card</div>
            <div className="add-payment-form__bottom">
              <InputClient placeholder={"Enter your Alias"} />
            </div>
          </div>
        </div>
        <div className="add-payment-form__item">
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">First name</div>
            <div className="add-payment-form__bottom">
              <InputClient width={251} placeholder={"Enter your first name"} />
            </div>
          </div>
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">Last name</div>
            <div className="add-payment-form__bottom">
              <InputClient width={251} placeholder={"Enter your last name"} />
            </div>
          </div>
        </div>
        <div className="add-payment-form__item">
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">Card number</div>
            <div className="add-payment-form__bottom add-payment-form__bottom--number">
              <div className="add-payment-form__inputs">
                <InputClient width={113} />
                <InputClient width={113} />
              </div>
              <div className="add-payment-form__inputs">
                <InputClient width={113} />
                <InputClient width={113} />
              </div>
            </div>
          </div>
        </div>
        <div className="add-payment-form__item add-payment-form__item--cvv">
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">CVV</div>
            <div className="add-payment-form__bottom ">
              <div className="add-payment-form__inputs">
                <InputClient width={113} />
              </div>
            </div>
          </div>
          <div className="add-payment-form__flex">
            <div className="add-payment-form__top">Expiration date</div>
            <div className="add-payment-form__bottom ">
              <div className="add-payment-form__inputs">
                <InputClient width={137} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-payment-form__buttons">
        <ClientCancel
          name={"name2"}
          text={"Cancel"}
          to={ROUTES.CLIENT_WORKSPACES}
        />
        <ClientButton
          to={ROUTES.CLIENT_WORKSPACES_ADD}
          width={182}
          text={"Submit"}
          theme={"clientbutton_primary"}
          type="submit"
        />
      </div>
    </form>
  );
};
