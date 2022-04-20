import { BrowserRouter,Routes, Route } from "react-router-dom";
import SignIn from "./layouts/SignIn";
import Dashboard from "./layouts/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Dashboard/>}/>
                <Route path="login" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
