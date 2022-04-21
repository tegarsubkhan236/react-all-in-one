import '../assets/css/dashboard.css'
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import CollapseProvider from "../context/AppContext"
import {renderRouteLayout, renderSubRouteLayout} from "../utils/utils"
import {Layout} from 'antd';
import {Routes} from "react-router-dom";
import menus from '../routes/config';

export default function Dashboard() {
    return (
        <CollapseProvider>
            <Layout>
                <AppSidebar/>
                <Layout className="site-layout">
                    <AppHeader/>
                    <Routes>
                        {menus.map((item, _) =>
                            item.hasOwnProperty("subs")
                                ? renderSubRouteLayout(item)
                                : renderRouteLayout(item)
                        )}
                    </Routes>
                </Layout>
            </Layout>
        </CollapseProvider>
    );
}
