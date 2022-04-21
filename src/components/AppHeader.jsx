import {createElement} from "react";
import {Layout} from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined} from "@ant-design/icons";
const { Header } = Layout;

const AppHeader = ({toggle, collapsed}) => {
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
        </Header>
    );
}

export default AppHeader
