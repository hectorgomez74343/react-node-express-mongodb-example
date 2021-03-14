import React from "react";
import { withRouter } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h2 style={{ marginTop: "15rem" }}>
                We had a problem processing your order, please try again.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Error);
