import React, { createContext, useReducer, useContext } from "react";

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hooks which allows to pull info from data layer
export const useStateValue = () => useContext(StateContext);
