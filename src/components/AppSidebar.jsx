import {useContext} from "react";
import {renderMenuSidebar, renderSubMenuSidebar} from "../utils/utils"
import {CollapseContext} from "../context/AppContext";
import {Layout, Menu} from 'antd';
import menus from "../routes/config";
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
            <Menu
                theme="light"
                mode="inline"
            >
                {menus.map((item, _) =>
                    item.hasOwnProperty("subs")
                        ? renderSubMenuSidebar(item)
                        : renderMenuSidebar(item)
                )}
            </Menu>
        </Sider>
    );
};

export default AppSidebar;
