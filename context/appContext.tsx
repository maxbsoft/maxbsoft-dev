import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { appReducer } from "./appReducer";


export interface AppState {
    blurredBg: boolean;   
}

export type AppAction = {
    type: string;
    payload?: any;
};

export interface AppProviderProps {
    children?: ReactNode;
}

const initialState: AppState = {
    blurredBg: false,
};

const AppContext = createContext(initialState);

const appActions = (dispatch: React.Dispatch<AppAction>) => {
    return {
        setBlurred: (value: boolean) =>
            dispatch({ type: "SET_BLURRED", payload: value }),
    };
};

const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const actions = appActions(dispatch);
    return (
        <AppContext.Provider value={{ ...state, ...actions }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };
