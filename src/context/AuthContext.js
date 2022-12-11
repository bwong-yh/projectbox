import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_READY': {
      return { ...state, user: action.payload, authReady: true };
    }
    case 'LOGIN':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  // every time page is refresh, user is reset back to null even firebase is still logged it
  // check firebase is any user is logged in or not when componet first mount, set app state accordingly
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      // state prop is set to true regardless if there's a logged in user or not
      dispatch({ type: 'AUTH_READY', payload: user || null });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
