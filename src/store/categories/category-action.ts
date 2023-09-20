import { CATEGORIES_ACTIONS_TYPES } from "./category-types";
import { createAction } from "./../../utils/reducer/reducer";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const setCategories = (categoriesArray: any) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START, {});

export const fetchCategoriesSuccess = (categoriesArray: any) =>
  createAction(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error: any) =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error);

// export const fetchCategoriesAsync: any = () => async (dispatch: any) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailure(error));
//   }
// };
