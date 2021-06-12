import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Success extends React.PureComponent {
  state = {
    isStopped: false,
    isPaused: false,
  };
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./checked-done.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div style={{ textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Success));
