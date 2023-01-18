import { createSelector } from "reselect";

const selectCategoryReducer = (state: any) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice: any) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories: any) =>
    categories.reduce((acc: any, category: any) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;

      return acc;
    }, {})
);
