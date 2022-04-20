import { Menu } from 'antd';
import menus from '../routes/config';
import {Link} from "react-router-dom";

const renderParent = (item) => {
    return(
        <Menu.Item key={item.key}>
            <Link to={item.key}>
                {item?.icon}
                <span className="nav-text">
                    {item.title}
                </span>
            </Link>
        </Menu.Item>
    )
}
const renderParentAndSub = (item) => {
    return (
        <Menu.SubMenu
            key={item.key}
            title={<span className="nav-text">{item.title}</span>}
            icon={item?.icon}
        >
            {item.subs.map(
                (sub) => (sub.subs ? renderParentAndSub(sub) : renderParent(sub))
            )}
        </Menu.SubMenu>
    )
}
const AppSidebarMenu = (props) => {
    return (
        <Menu {...props}>
            {menus.map((item, _) =>
                item.hasOwnProperty("subs")
                    ? renderParentAndSub(item)
                    : renderParent(item)
            )}
        </Menu>
    )
}

export default AppSidebarMenu
