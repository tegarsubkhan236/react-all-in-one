import {useState} from "react";
import {Routes} from "react-router-dom";
import {renderRouteLayout, renderSubRouteLayout} from "../utils/utils"
import {Layout} from 'antd';
import '../assets/css/dashboard.css'
import menus from '../routes/config';
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";


export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => setCollapsed(!collapsed)

    return (
        <Layout>
            <AppSidebar collapsed={collapsed}/>
            <Layout className="site-layout">
                <AppHeader toggle={toggle} collapsed={collapsed}/>
                <Routes>
                    {menus.map((item, _) =>
                        item.isLayout === true || item.hasChild === true
                            ? item.hasOwnProperty("subs") ? renderSubRouteLayout(item) : renderRouteLayout(item)
                            : ''
                    )}
                </Routes>
            </Layout>
        </Layout>
    );
}
