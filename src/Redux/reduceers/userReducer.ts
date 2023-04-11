import { UserContentType } from "../../types";
import {
  FETCH_USER_DATA_FAIL,
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA_SUCCESS,
  FILTER_USER_ITEMS,
  FetchUserDataDispatchType,
} from "../actions/fetchDataActionTypes";

interface UserDataStateType {
  data: UserContentType[];
  filterdData: UserContentType[];
  loading: boolean;
}

const initialState = {
  data: [],
  filterdData: [],
  loading: false,
};

export const userReducer = (
  state: UserDataStateType = initialState,
  action: FetchUserDataDispatchType
): UserDataStateType => {
  switch (action.type) {
    case FETCH_USER_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        filterdData: action.payload,
      };
    case FILTER_USER_ITEMS:
      const newData = state.data.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        filterdData: newData,
      };

    default:
      return state;
  }
};
