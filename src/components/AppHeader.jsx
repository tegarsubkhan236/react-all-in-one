import {createElement, useContext} from "react";
import { Layout } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined} from "@ant-design/icons";
import {CollapseContext} from "../context/AppContext";
const { Header } = Layout;

const AppHeader = () => {
    const {collapsed, setCollapsed} = useContext(CollapseContext)
    const toggleCollapse = () => {
        setCollapsed(!collapsed)
        console.log(collapsed)
    }
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggleCollapse,
            })}
        </Header>
    );
}

export default AppHeader
