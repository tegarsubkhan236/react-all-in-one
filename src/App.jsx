import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./views/Home"
import SignIn from "./layouts/SignIn";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
