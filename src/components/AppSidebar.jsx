import {Layout} from 'antd';
import SidebarRoutes from "../routes/SidebarRoutes";
const { Sider } = Layout;

const AppSidebar = ({collapsed}) => {
    return (
        <Sider
            trigger={null}
            theme={"dark"}
            style={{ overflowY: 'auto', height: '100vh' }}
            breakpoint="lg"
            collapsible
            collapsed={collapsed}
        >
            <div
                className="logo"
                style={{
                    height: '32px',
                    margin: '16px',
                    background: '#fff'
                }}
            />
            <SidebarRoutes/>
        </Sider>
    );
};

export default AppSidebar;
