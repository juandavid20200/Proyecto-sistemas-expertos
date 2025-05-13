import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import { AddInformationComponent, Main, TableScreen } from "../UI/Screen";
import { MinimalistLogin } from "../UI/Screen/Login";


const AppRoute:React.FC = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MinimalistLogin />}/>
                <Route path="/consultas" element={<AddInformationComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoute
