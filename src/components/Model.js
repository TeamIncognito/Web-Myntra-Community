import React from "react";
import { ContextProvider } from "../Global/Context";
const Model = () => {
    const {model} = React.useContext(ContextProvider);
    return<>{model ? <div className="model"></div>:""}</>;
    <div className="model__container">
        
    </div>
};

export default Model
