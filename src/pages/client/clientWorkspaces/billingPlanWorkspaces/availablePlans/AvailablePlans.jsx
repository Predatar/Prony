import React from "react";

const AvailablePlans = () => {
  return (
    <>
      <div className="plan-table__title">Available plans</div>
      <div className="available-plan">
        <div className="available-plan__body">
          <AvailablePlanItem background="#1565c0" fill={"#1565C0"} />
          <AvailablePlanItem background="#F43658" fill={"#F43658"} />
          <AvailablePlanItem background="#272557" fill={"#272557"} />
          <AvailablePlanItem background="#7791C2" fill={"#7791C2"} />
        </div>
      </div>
    </>
  );
};

export default AvailablePlans;

const AvailablePlanItem = ({ fill ,background }) => {
  return (
    <div className="available-item">
      <div className="available-item__color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="135"
          viewBox="0 0 72 135"
          fill="none"
        >
          <g filter="url(#filter0_d_814_11387)">
            <path
              d="M30 40C30 34.4772 34.4772 30 40 30H42V105H40C34.4772 105 30 100.523 30 95V40Z"
              fill={fill}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_814_11387"
              x="0"
              y="0"
              width="72"
              height="135"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.792157 0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0.55 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_814_11387"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_814_11387"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="available-item__body">
        <div className="available-item__items">
          <div className="plan-table__item">
            <div className="plan-table__item-top">Plan</div>
            <div className="plan-table__item-bottom">Basic</div>
          </div>
          <div className="plan-table__item">
            <div className="plan-table__item-top">Suggestions</div>
            <div className="plan-table__item-bottom">1000</div>
          </div>
          <div className="plan-table__item">
            <div className="plan-table__item-top">Team members</div>
            <div className="plan-table__item-bottom">10</div>
          </div>
          <div className="plan-table__item">
            <div className="plan-table__item-top">Price</div>
            <div className="plan-table__item-bottom">$25/mo</div>
          </div>
          <button style={{background:background}} className="available-item__button">Buy now</button>
        </div>
      </div>
    </div>
  );
};
