import React, { useReducer, useContext, createContext } from "react";

//prepares the data layer
export const StateContext = createContext();

//wrap out app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the information
export const useStateValue = () => useContext(StateContext);
