import React, { useState } from "react";
import Radio from "../../../../../UI/radio/Radio";
import { MdCancel } from "react-icons/md";
const PaymentItem = () => {
  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
  const [cardNumber3, setCardNumber3] = useState("");
  const [cardNumber4, setCardNumber4] = useState("");
  const [active, setActive] = useState(false);

  const handleChange = (e, setCardNumber) => {
    // Валидация введенных символов (можете добавить дополнительные проверки)
    const input = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
    setCardNumber(input);
    console.log(input);
  };

  return (
    <div
      onClick={() => setActive(true)}
      className={active ? "payment-item active" : "payment-item"}
    >
      <div className="payment-item__body">
        <div className="payment-item__top">
          <label>
            <Radio />
            Name of method
          </label>
        </div>
        <div className="payment-item__bottom">
          <div className="payment-item__code">
            <div className="payment-item__code-item">
              <input
                id="cardNumber1"
                value={cardNumber1}
                onChange={(e) => handleChange(e, setCardNumber1)}
                type="text"
                placeholder="XXXX"
              />
            </div>
            <div className="payment-item__code-item">
              <input
                id="cardNumber2"
                value={cardNumber2}
                onChange={(e) => handleChange(e, setCardNumber2)}
                type="text"
                placeholder="XXXX"
              />
            </div>
            <div className="payment-item__code-item">
              <input
                id="cardNumber3"
                value={cardNumber3}
                onChange={(e) => handleChange(e, setCardNumber3)}
                type="text"
                placeholder="XXXX"
              />
            </div>
            <div className="payment-item__code-item">
              <input
                id="cardNumber4"
                value={cardNumber4}
                onChange={(e) => handleChange(e, setCardNumber4)}
                type="text"
                placeholder="XXXX"
              />
            </div>
          </div>
        </div>
      </div>
      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Предотвращаем всплытие события
            setActive(false);
          }}
          className="payment-item__close"
        >
          <MdCancel />
        </button>
      )}
    </div>
  );
};

export default PaymentItem;
