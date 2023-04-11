import { SelectedItemType } from "../../types";
import {
  CLEAR_LIST,
  REMOVE_SELECTED,
  SELECT_ITEM,
  SelectedDataDispatchType,
} from "../actions/fetchDataActionTypes";

interface SelectedDataStateType {
  data: SelectedItemType[];
}

const initialState = {
  data: [],
};

export const selectedReducer = (
  state: SelectedDataStateType = initialState,
  action: SelectedDataDispatchType
): SelectedDataStateType => {
  switch (action.type) {
    case SELECT_ITEM:
      return { ...state, data: [...state.data, action.payload] };
    case REMOVE_SELECTED:
      const newData = state.data.filter((item) => item.id !== action.payload);
      return { ...state, data: newData };
    case CLEAR_LIST:
      return { ...state, data: [] };
    default:
      return state;
  }
};
