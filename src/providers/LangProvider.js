import React, { useState } from 'react';
import LangContext from '../contexts/LangContext';

const LangProvider = ({ children }) => {

  const [globalVariable, setGlobalVariable] = useState(localStorage.getItem('lang') || 'uk');

  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  return (
    <LangContext.Provider value={{ globalVariable, updateGlobalVariable }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;