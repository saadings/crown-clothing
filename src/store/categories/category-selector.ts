import { createSelector } from "reselect";

import { CategoriesState } from "./category-reducer";
import { CategoryMap } from "./category-types";

const selectCategoryReducer = (state: any): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: any, category: any) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;

      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice: any) => categoriesSlice.isLoading
);
