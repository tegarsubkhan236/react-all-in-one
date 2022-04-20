import '../assets/css/dashboard.css'
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import CollapseProvider from "../context/AppContext"
import {Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import menus from '../routes/config';

export default function Dashboard() {
    const renderParent = (item) => {
        return(
            <>
                <Route path={item.key} element={item.component}/>
            </>
        )
    }
    const renderParentAndSub = (item) => {
        return (
            <>
                <Route path={item.key} element={item.component}/>
                {item.subs.map(
                    (sub) => (sub.subs ? renderParentAndSub(sub) : renderParent(sub))
                )}
            </>
        )
    }
    return (
        <CollapseProvider>
            <Layout>
                <AppSidebar/>
                <Layout className="site-layout">
                    <AppHeader/>
                    <Routes>
                        {menus.map((item, _) =>
                            item.hasOwnProperty("subs")
                                ? renderParentAndSub(item)
                                : renderParent(item)
                        )}
                    </Routes>
                </Layout>
            </Layout>
        </CollapseProvider>
    );
}
