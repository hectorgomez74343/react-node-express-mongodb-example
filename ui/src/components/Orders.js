import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeOrder } from "../redux/actions/ordersActions";

class Orders extends React.Component {
  render() {
    const { orders } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Service Orders</h2>
            <table className="table" style={{ color: "white" }}>
              <thead>
                <tr>
                  <th scope="col">Phone Number</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Time</th>
                  <th scope="col">Order Type</th>
                  <th scope="col">Delete Order</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0
                  ? orders.map((order, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{order.phoneNumber}</th>
                          <td>{order.name}</td>
                          <td>{order.lastName}</td>
                          <td>{order.address}</td>
                          <td>{order.email}</td>
                          <td>{order.time}</td>
                          <td>{order.type}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={this.props.deleteOrdr.bind(this, order)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersReducer.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteOrdr: (order) => dispatch(removeOrder(order)),
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));
