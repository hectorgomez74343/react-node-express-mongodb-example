import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getOrders, deleteOrder } from "../redux/actions/ordersActions";
import "./Orders.css";
let Orders = (props) => {
  const { orders, getOrdrs, deleteOrdr, loading } = props;

  React.useEffect(() => {
    getOrdrs();
  }, []);

  if (loading) {
    return <h1 className="table-no-orders-color">...Loading orders</h1>;
  }

  if (orders.length === 0) {
    return <h1 className="table-no-orders-color">You have no orders</h1>;
  }

  return (
    <div>
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Time</th>
            <th>Order Type</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0
            ? orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <th>{order.phoneNumber}</th>
                    <td>{order.name}</td>
                    <td>{order.lastName}</td>
                    <td>{order.address}</td>
                    <td>{order.email}</td>
                    <td>{order.time}</td>
                    <td>{order.type}</td>
                    <td>
                      <button
                        type="button"
                        className="btn-danger"
                        onClick={() => deleteOrdr(order._id)}
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
  );
};

function mapStateToProps(state) {
  return {
    orders: state.ordersReducer.orders,
    loading: state.ordersReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrdrs: bindActionCreators(getOrders, dispatch),
    deleteOrdr: bindActionCreators(deleteOrder, dispatch),
  };
}

Orders = withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));

export default Orders;
