import React from "react";
import { withRouter } from "react-router-dom";

class Error extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 style={{ marginTop: "15rem" }}>
          We had a problem processing your order, please try again.
        </h2>
      </div>
    );
  }
}

export default withRouter(Error);
