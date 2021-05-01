import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

class Card extends React.PureComponent {
  routeToScheduler = () => {
    const { addOrdType, image, title, history } = this.props;

    history.push("/scheduler");
    addOrdType({
      image,
      title,
      text:
        "Click this image once you are done entering your first name, last name, phone number, address, and email to order your service.",
    });
  };

  render() {
    const { image, title, text, style } = this.props;
    return (
      <div className="Card" onClick={this.routeToScheduler}>
        <img src={image} alt={title} style={style} />
        <h3>{title}</h3>
        <h3>{text}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOrdType: (order) => dispatch(addOrderType(order)),
  };
}
export default withRouter(connect(null, mapDispatchToProps)(Card));
