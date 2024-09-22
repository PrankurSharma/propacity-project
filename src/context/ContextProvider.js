import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const ContextProvider = (props) => {
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("New Delhi");
    const [pullDist, setPullDist] = useState(0);
    const [unit, setUnit] = useState("celcius");
    const [alerts, setAlerts] = useState([]);
    return (
        <AppContext.Provider value={{
            refresh, setRefresh,
            searchTerm, setSearchTerm,
            unit, setUnit,
            loading, setLoading,
            pullDist, setPullDist,
            alerts, setAlerts
        }}>
            {props.children}
        </AppContext.Provider>
    );
}