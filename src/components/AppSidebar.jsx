import AppSidebarMenu from "../components/AppSidebarMenu";
import {Layout} from 'antd';
import {useContext} from "react";
import {CollapseContext} from "../context/AppContext";
const { Sider } = Layout;

const AppSidebar = () => {
    const {collapsed} = useContext(CollapseContext)
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <AppSidebarMenu theme="dark" mode="inline" style={{ height: '100vh' }} />
        </Sider>
    );
};

export default AppSidebar;
