import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase";

// ? As the actual value you want to access
export const UserContext: any = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// ? component that wraps other components that need that info
export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
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
