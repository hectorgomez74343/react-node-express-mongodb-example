import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, deleteOrder } from "../redux/actions/ordersActions";

class Orders extends React.Component {
  componentDidMount() {
    this.props.getOrdrs();
  }

  render() {
    const { orders } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Service Orders</h2>
            {orders.length > 0 ? (
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
                                onClick={() => this.props.deleteOrdr(order._id)}
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
            ) : (
              <h2 style={{ marginTop: "14rem" }}>...Loading Orders</h2>
            )}
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
    getOrdrs: bindActionCreators(getOrders, dispatch),
    deleteOrdr: bindActionCreators(deleteOrder, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));
