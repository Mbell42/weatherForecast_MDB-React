//Dependencies
import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
//Component
function Header () {
      return (
          <MDBRow className="mt-5 mb-3 p-2" style={{ background:"#288a44" }}>
            <MDBCol>
              <h1>Weather Forecast App</h1>
            </MDBCol>
          </MDBRow>  
      );
  }
export default Header;