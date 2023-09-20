import { CATEGORIES_ACTIONS_TYPES } from "./category-types";

const INITIAL_CATEGORY_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INITIAL_CATEGORY_STATE,
  action: any
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };

    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
