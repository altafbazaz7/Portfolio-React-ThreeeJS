import path from 'path';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react'




const Portfolio = createContext<any>(null);

export const PortfolioContext = ({children} : any) => {




  return <Portfolio.Provider value={{}}>
          {children} 
          </Portfolio.Provider>
  
}

export default PortfolioContext;



export const PortfolioState = () => {
  return useContext(Portfolio)
}