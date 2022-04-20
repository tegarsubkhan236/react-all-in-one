import {useContext} from "react";
import {CollapseContext} from "../context/AppContext";
import {Layout} from 'antd';
import AppSidebarMenu from "../components/AppSidebarMenu";
const { Sider } = Layout;

const AppSidebar = () => {
    const {collapsed} = useContext(CollapseContext)
    return (
        <Sider
            trigger={null}
            theme="light"
            breakpoint="lg"
            collapsible
            collapsed={collapsed}
        >
            <div className="logo"/>
            <AppSidebarMenu
                theme="light"
                mode="inline"
            />
        </Sider>
    );
};

export default AppSidebar;
