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
import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};

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
const encryptedPassword = btoa("serverpassword");

export function processOrder(order) {
  const params = { ...order, password: encryptedPassword };

  return async function (dispatch) {
    dispatch(createOrderRequest());
    try {
      await axios.post(process.env.REACT_APP_CREATE_ORDER, {
        headers: headers,
        params,
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
  const params = { password: encryptedPassword };

  return async function (dispatch) {
    dispatch(getOrdersRequest());

    try {
      const response = await axios.get(process.env.REACT_APP_GET_ORDERS, {
        headers: headers,
        params: params,
      });
      const orders = await response.data;

      dispatch(getOrdersSuccess(orders));
    } catch (e) {
      dispatch(getOrdersFailure());
    }
  };
}

export function deleteOrder(id) {
  return async function (dispatch) {
    dispatch(deleteOrderRequest());
    try {
      const params = { id, password: encryptedPassword };
      await axios.delete(process.env.REACT_APP_DELETE_ORDER, {
        headers: headers,
        params,
      });
      dispatch(deleteOrderSuccess(id));
    } catch (e) {
      dispatch(getOrdersFailure());
    }
  };
}
