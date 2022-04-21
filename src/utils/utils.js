import {Link, Route} from "react-router-dom";
import {Menu} from "antd";

export const renderRouteLayout = (item) => {
    return(
        <>
            <Route path={item.key} element={item.component}/>
        </>
    )
}
export const renderSubRouteLayout = (item) => {
    return (
        <>
            <Route path={item.key} element={item.component}/>
            {item.subs.map(
                (sub) => (sub.subs ? renderSubRouteLayout(sub) : renderRouteLayout(sub))
            )}
        </>
    )
}
export const renderMenuSidebar = (item) => {
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
export const renderSubMenuSidebar = (item) => {
    return (
        <Menu.SubMenu
            key={item.key}
            title={<span className="nav-text">{item.title}</span>}
            icon={item?.icon}
        >
            {item.subs.map(
                (sub) => (sub.subs ? renderSubMenuSidebar(sub) : renderMenuSidebar(sub))
            )}
        </Menu.SubMenu>
    )
}
