import React, { useState, useReducer, useContext } from "react";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
const AppContext = React.createContext();
const AppProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
