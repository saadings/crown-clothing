import { USER_ACTION_TYPES } from "./user-types";
import { createAction } from "../../utils/reducer/reducer";

export const setCurrentUser = (user: any) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
