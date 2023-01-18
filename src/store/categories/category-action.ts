import { CATEGORIES_ACTIONS_TYPES } from "./category-types";
import { createAction } from "./../../utils/reducer/reducer";

export const setCategories = (categoriesArray: any) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categoriesArray);
