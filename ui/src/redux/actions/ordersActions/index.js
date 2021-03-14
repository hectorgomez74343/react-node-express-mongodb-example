import { ADD_ORDER_TYPE, ADD_ORDER, REMOVE_ORDER } from "../../types";

export function addOrderType(order) {
  return {
    type: ADD_ORDER_TYPE,
    payload: order,
  };
}

export function addOrder(order) {
  return {
    type: ADD_ORDER,
    payload: order,
  };
}

export function removeOrder(order) {
  return {
    type: REMOVE_ORDER,
    payload: order,
  };
}
