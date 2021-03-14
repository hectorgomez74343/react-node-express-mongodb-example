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

const INTIAL_STATE = {
  loading: false,
  orderType: {},
  orders: [],
};

function ordersReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case ADD_ORDER_TYPE:
      const {
        text,
        image,
        title,
        phoneNumber,
        email,
        address,
      } = action.payload;

      return {
        ...state,
        orderType: { text, image, title, phoneNumber, email, address },
      };

    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true };

    case CREATE_ORDER_REQUEST_SUCCESS:
      return { ...state, loading: false };

    case CREATE_ORDER_REQUEST_FAILURE:
      return { ...state, loading: false };

    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload),
        loading: false,
      };

    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_ORDERS_REQUEST:
      return { ...state, loading: true };

    case GET_ORDERS_SUCCESS:
      return { ...state, orders: action.payload, loading: false };

    case GET_ORDERS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}

export default ordersReducer;
