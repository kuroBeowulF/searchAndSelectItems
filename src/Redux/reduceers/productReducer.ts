import { ProductContentType } from "../../types";
import {
  FETCH_PRODUCTS_DATA_LOADING,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_PRODUCTS_DATA_SUCCESS,
  FetchProductsDataDispatchType,
  FILTER_PRODUCT_ITEMS,
} from "./../actions/fetchDataActionTypes";

interface ProductDataStateType {
  data: ProductContentType[];
  filterdData: ProductContentType[];
  loading: boolean;
}

const initialState = {
  data: [],
  filterdData: [],
  loading: false,
};

export const productReducer = (
  state: ProductDataStateType = initialState,
  action: FetchProductsDataDispatchType
): ProductDataStateType => {
  switch (action.type) {
    case FETCH_PRODUCTS_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };
    case FETCH_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        filterdData: action.payload,
      };
    case FILTER_PRODUCT_ITEMS:
      const newData = state.data.filter((item) =>
        item.title.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        filterdData: newData,
      };

    default:
      return state;
  }
};
