import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Layout} from 'antd';
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";

const {Content} = Layout

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => setCollapsed(!collapsed)

    return (
        <Layout>
            <AppSidebar collapsed={collapsed}/>
            <Layout>
                <AppHeader toggle={toggle} collapsed={collapsed}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}
