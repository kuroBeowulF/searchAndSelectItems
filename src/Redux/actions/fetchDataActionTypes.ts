import {
  ProductContentType,
  SelectedItemType,
  UserContentType,
} from "../../types";

export const FETCH_USER_DATA_LOADING = "FETCH_USER_DATA_LOADING";
export const FETCH_USER_DATA_FAIL = "FETCH_USER_DATA_FAIL";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FILTER_USER_ITEMS = "FILTER_USER_ITEMS";

type FetchUserDataResponseType = UserContentType[];

export interface FetchUserDataLoading {
  type: typeof FETCH_USER_DATA_LOADING;
}
export interface FetchUserDataFail {
  type: typeof FETCH_USER_DATA_FAIL;
}
export interface FetchUserDataSuccess {
  type: typeof FETCH_USER_DATA_SUCCESS;
  payload: FetchUserDataResponseType;
}
export interface FilterUserData {
  type: typeof FILTER_USER_ITEMS;
  payload: string;
}

export type FetchUserDataDispatchType =
  | FetchUserDataLoading
  | FetchUserDataFail
  | FetchUserDataSuccess
  | FilterUserData;

export const FETCH_PRODUCTS_DATA_LOADING = "FETCH_PRODUCTS_DATA_LOADING";
export const FETCH_PRODUCTS_DATA_FAIL = "FETCH_PRODUCTS_DATA_FAIL";
export const FETCH_PRODUCTS_DATA_SUCCESS = "FETCH_PRODUCTS_DATA_SUCCESS";
export const FILTER_PRODUCT_ITEMS = "FILTER_PRODUCT_ITEMS";

type FetchProductsDataResponseType = ProductContentType[];

export interface FetchProductsDataLoading {
  type: typeof FETCH_PRODUCTS_DATA_LOADING;
}
export interface FetchProductsDataFail {
  type: typeof FETCH_PRODUCTS_DATA_FAIL;
}
export interface FetchProductsDataSuccess {
  type: typeof FETCH_PRODUCTS_DATA_SUCCESS;
  payload: FetchProductsDataResponseType;
}
export interface FilterProductData {
  type: typeof FILTER_PRODUCT_ITEMS;
  payload: string;
}

export type FetchProductsDataDispatchType =
  | FetchProductsDataLoading
  | FetchProductsDataFail
  | FetchProductsDataSuccess
  | FilterProductData;

export const REMOVE_SELECTED = "REMOVE_SELECTED";
export const SELECT_ITEM = "SELECT_ITEM";
export const CLEAR_LIST = "CLEAR_LIST";

export interface RemoveSelected {
  type: typeof REMOVE_SELECTED;
  payload: number;
}

export interface SelectItem {
  type: typeof SELECT_ITEM;
  payload: SelectedItemType;
}
export interface ClearSeletedList {
  type: typeof CLEAR_LIST;
}
export type SelectedDataDispatchType =
  | RemoveSelected
  | SelectItem
  | ClearSeletedList;
