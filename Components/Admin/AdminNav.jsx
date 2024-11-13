import React from "react";
import ButtonCmp from "./RegularComp/ButtonCmp"

const AdminNav = () => {
  return (
    <div className="col-12 col-lg-3">
      <div className="section__tabs-profile">
        <ul className="nav nav-tabs section__tabs section__tabs--big section__tabs--profile" id="section__tabs" role="tablist">
          <ButtonCmp name={"Dashboard"} tab={1} styleClass={"active"}/>
          <ButtonCmp name={"Investing"} tab={1} />
          <ButtonCmp name={"Staking"} tab={1} />
          <ButtonCmp name={"Transfer"} tab={1} />
          <ButtonCmp name={"Pool"} tab={1} />
          <ButtonCmp name={"ICO Token"} tab={1} />
          
        </ul>
      </div>
    </div>
  )
};

export default AdminNav;
