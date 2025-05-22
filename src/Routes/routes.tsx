import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import { AddInformationComponent, Main, TableScreen } from "../UI/Screen";
import { MinimalistLogin } from "../UI/Screen/Login";
import { ChatbotComponent } from "../UI/Screen/Chat";


const AppRoute:React.FC = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MinimalistLogin />}/>
                <Route path="/consultas" element={<AddInformationComponent/>}/>
                <Route path="/chatbot" element={<ChatbotComponent />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoute
