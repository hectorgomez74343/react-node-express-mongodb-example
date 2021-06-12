import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { processOrder } from "../redux/actions/ordersActions";
import "./Scheduler.css";

let Scheduler = (props) => {
  const [processing, setProcessing] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [error, setError] = React.useState(
    "You need to enter your first name, last name, phone number, address and email to order a suit."
  );
  const [formError, setFormError] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const orderType = useSelector((state) => state.ordersReducer.orderType);
  const { text, image, title, price } = orderType;
  const { history, createOrder } = props;

  const routeToRoot = () => {
    history.push("/");
  };
  const confirmOrder = () => {
    const date = new Date();

    if (
      name.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      return setFormError(true);
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
    setProcessing(true);
  };

  const setValue = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      return setError(false);
    }
    if (name === "lastName") {
      setLastName(value);
      return setError(false);
    }
    if (name === "phoneNumber") {
      setPhoneNumber(value);
      return setError(false);
    }
    if (name === "address") {
      setAddress(value);
      return setError(false);
    }
    if (name === "email") {
      setEmail(value);
      return setError;
    }
  };

  if (processing) {
    return <h1 className="align-text">...Processing Requesst</h1>;
  }

  return (
    <div>
      <h2>Order your suit</h2>
      <div className="flexbox-one">
        <button className="btn-danger" type="button" onClick={routeToRoot}>
          Click to order a different suit
        </button>
      </div>
      <div className="flexbox-two">
        <div className="Card card-display" onClick={confirmOrder}>
          <img src={image} alt={title} className="card-display-width" />
          <h3>{title}</h3>
          <h3>{price}</h3>
          <h3 className="font-display-image">{text}</h3>
        </div>
      </div>
      <div className="flexbox-three">
        <h3 className="order-suit-h3">
          Enter your first name, last name, phone number, address, and email.
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input-style"
          onChange={setValue}
          value={name}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          className="input-style"
          onChange={setValue}
          value={lastName}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          className="input-style"
          onChange={setValue}
          value={phoneNumber}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          className="input-style"
          onChange={setValue}
          value={address}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="input-style"
          onChange={setValue}
          value={email}
        />
        {formError ? <p className="error-message-order-suit">{error}</p> : null}
      </div>
    </div>
  );
};

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

Scheduler = withRouter(connect(mapStateToProps, mapDispatchToProps)(Scheduler));

export default Scheduler;
