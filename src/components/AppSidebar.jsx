import {renderMenuSidebar, renderSubMenuSidebar} from "../utils/utils"
import {Layout, Menu} from 'antd';
import menus from "../routes/config";
const { Sider } = Layout;

const AppSidebar = ({collapsed}) => {
    return (
        <Sider
            trigger={null}
            style={{ overflowY: 'auto' }}
            breakpoint="lg"
            collapsible
            collapsed={collapsed}
        >
            <div className="logo"/>
            <Menu mode="inline" theme={"dark"}>
                {menus.map((item, _) =>
                    item.isSidebar === true
                        ? item.hasOwnProperty("subs") ? renderSubMenuSidebar(item) : renderMenuSidebar(item)
                        : ''
                )}
            </Menu>
        </Sider>
    );
};

export default AppSidebar;
