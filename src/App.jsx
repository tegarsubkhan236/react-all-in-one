import { BrowserRouter,Routes, Route } from "react-router-dom";
import SignIn from "./layouts/SignIn";
import Dashboard from "./layouts/Dashboard";
import Home from "./views/Home";
import Damn from "./views/Damn";
import Finish from "./views/Finish";
import Default from "./views/Default";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<SignIn/>}/>
                <Route path={"/"} element={<Dashboard />}>
                    <Route index element={<Home />}/>
                    <Route path={"damn"} element={<Damn />}/>
                    <Route path={"finish"} element={<Finish />}/>
                    <Route path={"default"} element={<Default />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
