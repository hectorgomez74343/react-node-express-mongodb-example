import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { processOrder } from "../redux/actions/ordersActions";

class Scheduler extends React.Component {
  state = {
    address: "",
    email: "",
    name: "",
    lastName: "",
    error:
      "You need to enter your first name, last name, phone number, address and email to order a service.",
    formError: false,
    phoneNumber: "",
  };
  routeToRoot = () => {
    const { history } = this.props;
    history.push("/");
  };
  confirmOrder = () => {
    const { history, createOrder } = this.props;
    const { title } = this.props.orderType;
    const date = new Date();
    const { name, lastName, phoneNumber, email, address } = this.state;
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      return this.setState({
        formError: true,
      });
    }
    createOrder({
      name,
      lastName,
      time: date.toString(),
      type: title,
      phoneNumber,
      email,
      address,
    });
    history.push("/confirmation-order");
  };

  setValue = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      formError: false,
    });
  };
  render() {
    const { text, image, title } = this.props.orderType;
    const {
      address,
      email,
      name,
      lastName,
      error,
      formError,
      phoneNumber,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Order your service</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{
              justifyContent: "center",
              display: "flex",
              marginBottom: "1rem",
            }}
          >
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.routeToRoot}
            >
              Click to order a different service
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="Cards"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="Card"
                style={{ width: "400px", height: "400px" }}
                onClick={this.confirmOrder}
              >
                <img src={image} alt={title} style={{ width: "26rem" }} />
                <h3>{title}</h3>
                <h3 style={{ fontSize: "20px" }}>{text}</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h3 style={{ width: "100%", fontSize: "27px" }}>
                Enter your first name, last name, phone number, address, and
                email.
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                style={{ textAlign: "center", marginTop: "1rem" }}
                onChange={this.setValue}
                value={name}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                onChange={this.setValue}
                value={lastName}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                onChange={this.setValue}
                value={phoneNumber}
              />
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                onChange={this.setValue}
                value={address}
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                onChange={this.setValue}
                value={email}
              />
              {formError ? (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderType: state.ordersReducer.orderType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createOrder: bindActionCreators(processOrder, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Scheduler)
);
