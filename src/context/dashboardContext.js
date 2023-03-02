import {createContext, useState, useContext} from 'react'


export const DashboardContext = createContext({})
export const useDashboardContext = () => useContext(DashboardContext)

export const DashboardContextProvider = ({children}) => {

    const [globalDate, setGlobalDate] = useState();

    const updateGlobalDate = (date) => {
        setGlobalDate(date);
    }

    const contextValue = {updateGlobalDate, globalDate}

    return (
        <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>
    );


}