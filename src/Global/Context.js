import React,{createContext} from "react";
export const ContextProvider = createContext();

const Context = (props) => {
    const [model,setModel] = React.useState(false);
    const openModel=()=>{
        setModel(true);
    }
    return (
    <ContextProvider.Provider value={{model,openModel}}> 
    {props.children}
    </ContextProvider.Provider> 
    );
};

export default Context
