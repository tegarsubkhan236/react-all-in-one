import AppSidebarMenu from "../components/AppSidebarMenu";
import {Layout} from 'antd';
import {useContext} from "react";
import {CollapseContext} from "../context/AppContext";
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
            <div className="logo">
                {/*<Typography.Text strong keyboard style={{ color:'#1890ff', fontSize: '20px', marginLeft: '15px' }}>*/}
                {/*    My App ANTD*/}
                {/*</Typography.Text>*/}
            </div>
            <AppSidebarMenu
                theme="light"
                mode="inline"
            />
        </Sider>
    );
};

export default AppSidebar;
