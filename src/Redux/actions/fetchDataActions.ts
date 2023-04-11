import axios from "axios";
import { Dispatch } from "redux";
import {
  CLEAR_LIST,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_PRODUCTS_DATA_LOADING,
  FETCH_PRODUCTS_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA_SUCCESS,
  FILTER_PRODUCT_ITEMS,
  FILTER_USER_ITEMS,
  FetchProductsDataDispatchType,
  FetchUserDataDispatchType,
  REMOVE_SELECTED,
  SELECT_ITEM,
} from "./fetchDataActionTypes";
import { SelectedItemType } from "../../types";

export const getUserData = () => {
  return async (dispatch: Dispatch<FetchUserDataDispatchType>) => {
    try {
      dispatch({
        type: FETCH_USER_DATA_LOADING,
      });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: FETCH_USER_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_DATA_FAIL,
      });
    }
  };
};
export const getProductData = () => {
  return async (dispatch: Dispatch<FetchProductsDataDispatchType>) => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_DATA_LOADING,
      });
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: FETCH_PRODUCTS_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_DATA_FAIL,
      });
    }
  };
};

export const filterUserItems = (itemName: string) => {
  return {
    type: FILTER_USER_ITEMS,
    payload: itemName,
  };
};
export const filterProductItems = (itemName: string) => {
  return {
    type: FILTER_PRODUCT_ITEMS,
    payload: itemName,
  };
};
export const selectItem = (item: SelectedItemType) => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};
export const removeItem = (id: number) => {
  return {
    type: REMOVE_SELECTED,
    payload: id,
  };
};
export const clearList = () => {
  return {
    type: CLEAR_LIST,
  };
};
