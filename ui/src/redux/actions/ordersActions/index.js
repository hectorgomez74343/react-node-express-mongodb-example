import {
  ADD_ORDER_TYPE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_REQUEST_SUCCESS,
  CREATE_ORDER_REQUEST_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
} from "../../types";

export function addOrderType(order) {
  return {
    type: ADD_ORDER_TYPE,
    payload: order,
  };
}

export function createOrderRequest() {
  return {
    type: CREATE_ORDER_REQUEST,
  };
}

export function createOrderSuccess(order) {
  return {
    type: CREATE_ORDER_REQUEST_SUCCESS,
    payload: order,
  };
}

export function createOrderFailure() {
  return {
    type: CREATE_ORDER_REQUEST_FAILURE,
  };
}

export function deleteOrderRequest() {
  return {
    type: DELETE_ORDER_REQUEST,
  };
}

export function deleteOrderSuccess(id) {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload: id,
  };
}

export function deleteOrderFailure() {
  return {
    type: DELETE_ORDER_FAILURE,
  };
}

export function getOrdersRequest() {
  return {
    type: GET_ORDERS_REQUEST,
  };
}

export function getOrdersSuccess(orders) {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: orders,
  };
}

export function getOrdersFailure() {
  return {
    type: GET_ORDERS_FAILURE,
  };
}
export function processOrder(order) {
  return async function(dispatch) {
    dispatch(createOrderRequest());
    try {
      const payload = JSON.stringify(order);

      await fetch(process.env.REACT_APP_CREATE_ORDER, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: payload,
      });

      window.location.replace("#/confirmation-order");

      dispatch(createOrderSuccess());
    } catch (e) {
      window.location.replace("#/error");
      dispatch(createOrderFailure());
    }
  };
}

export function getOrders() {
  return async function(dispatch) {
    dispatch(getOrdersRequest());
    try {
      const response = await fetch(process.env.REACT_APP_GET_ORDERS, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const orders = await response.json();

      dispatch(getOrdersSuccess(orders));
    } catch (e) {
      dispatch(getOrdersFailure());
    }
  };
}

export function deleteOrder(id) {
  return async function(dispatch) {
    dispatch(deleteOrderRequest());
    try {
      const payload = JSON.stringify({ id: id });
      await fetch(process.env.REACT_APP_DELETE_ORDER, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: payload,
      });
      dispatch(deleteOrderSuccess(id));
    } catch (e) {
      dispatch(getOrdersFailure());
    }
  };
}
