import { CATEGORIES_ACTIONS_TYPES, Category } from "./category-types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "./../../utils/reducer/reducer";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailure = withMatcher(
  (error: Error): FetchCategoriesFailure =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error)
);
