import { USER_ACTION_TYPES } from "./user-types";

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, // Spread through previous state
        currentUser: payload,
      };

    default:
      return state;
  }
};
