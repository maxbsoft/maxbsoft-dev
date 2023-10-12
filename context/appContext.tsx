import React, { createContext, useReducer, useContext } from 'react';
import { appReducer } from './appReducer';
import { AppState, AppAction, AppProviderProps } from './types';

const initialState: AppState = {
  blurredBg: false,
};

const AppContext = createContext(initialState);

const appActions = (dispatch: React.Dispatch<AppAction>) => ({
  setBlurred: (value: boolean) => dispatch({ type: 'SET_BLURRED', payload: value }),
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const actions = appActions(dispatch);
  return (
    <AppContext.Provider value={{ ...state, ...actions }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, AppContext, useAppContext };
