import React, { Fragment} from "react";

const Subscriptions = () => {
  return (
    <Fragment>
      <div className="modalTable_header">
        Select one of the following subscriptions to reserve 123.ch/shirts
      </div>
      <div className="SubItems">
        <div className="SubItem">
          <div className="SubItem_header">MONTHLY</div>
          <div className="SubItem_content">
            <div className="SubItem_title">123.-CHF</div>
            <div className="SubItem_description"></div>
            <button className="btn default grey">Order Now</button>
          </div>
        </div>
        <div className="SubItem">
          <div className="SubItem_header">MONTHLY</div>
          <div className="SubItem_content">
            <div className="SubItem_title">438.-CHF</div>
            <div className="SubItem_description">73 CHF / mo</div>
            <div className="SubItem_save">Save Over 40%</div>
            <button className="btn default ">Order Now</button>
          </div>
        </div>
        <div className="SubItem">
          <div className="SubItem_header">MONTHLY</div>
          <div className="SubItem_content">
            <div className="SubItem_title">497.-CHF</div>
            <div className="SubItem_description">41 CHF / mo</div>
            <div className="SubItem_save">Save Over 66%</div>
            <button className="btn default grey">Order Now</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Subscriptions;
