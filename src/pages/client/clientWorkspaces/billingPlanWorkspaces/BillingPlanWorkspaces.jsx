import React from "react";
import TitleClient from "../components/Title/TitleClient";
import AvailablePlans from "./availablePlans/AvailablePlans";
import "./billingPlan.scss";
import PlanTable from "./planTable/PlanTable";
import { AiOutlineClockCircle } from "react-icons/ai";
const BillingPlanWorkspaces = () => {
  return (
    <div className="billing-plan">
      <div className="billing-plan__body">
        <div className="billing-plan__top">
          <TitleClient text={"Billing Plan"} />
          <div className="billing-plan__notify">
            <AiOutlineClockCircle />
            <span>
              Your Trial expires in X days. You can always buy a plan before the
              trial period ends
            </span>
          </div>
        </div>
        <div className="billing-plan__bottom">
          <div className="billing-plan__bottom-body">
            <div className="billing-plan__bottom-top">
              <PlanTable />
            </div>
            <div className="billing-plan__bottom-bottom">
              <AvailablePlans />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPlanWorkspaces;
