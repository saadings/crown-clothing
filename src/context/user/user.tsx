import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state: any, action: any) => {
  console.log("dispatched");

  console.log(action);

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, // Spread through previous state
        currentUser: payload,
      };
    case "increment":
      return {
        value: state.value + 1,
      };

    default:
      throw new Error(`Unhandled type ${type}`);
  }
};

// ? As the actual value you want to access
export const UserContext: any = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_USER_STATE = {
  currentUser: null,
};

// ? component that wraps other components that need that info
export const UserProvider = ({ children }: any) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser }, dispatch] = useReducer(
    userReducer,
    INITIAL_USER_STATE
  );
  console.log(currentUser);

  const setCurrentUser = (user: any) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    // ? remove observer from the stream
    return unsubscribe;
  }, []);

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
};

/**
 * const userReducer = (state, action) => {
 * return {
 *  currentUser: null,
 *  setCurrentUser: () => {}
 * }
 *
 * }
 *
 */
