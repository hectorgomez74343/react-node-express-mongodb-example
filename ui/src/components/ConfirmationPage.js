import React from "react";
import { withRouter } from "react-router-dom";

import Success from "./success";

function ConfirmationPage(props) {
  const routeToMainMenu = () => {
    props.history.push("/");
  };

  return (
    <div>
      <h2>
        Your suit has been ordered! We will call you to let you know the status
        of your order!
      </h2>
      <h4 className="phone-number phone-text-size">1-800-393-2999</h4>
      <h1 className="phone-number">Your order number is 5354992</h1>

      <div className="flexbox-four">
        <button className="btn-danger" type="button" onClick={routeToMainMenu}>
          Click to go back to main menu
        </button>
      </div>
      <Success />
    </div>
  );
}

export default withRouter(ConfirmationPage);
