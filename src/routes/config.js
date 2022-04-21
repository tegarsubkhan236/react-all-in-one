import {HomeFilled, ScanOutlined, LogoutOutlined} from "@ant-design/icons";
import Home from "../views/Home";
import Damn from "../views/Damn";
import Finish from "../views/Finish";
import Default from "../views/Default";

const menus = [
    {
        key: "/",
        isLayout: true,
        component: <Default/>,
    },
    {
        key: "home",
        title: 'Dashboard',
        isSidebar: true,
        isLayout: true,
        icon: <HomeFilled/>,
        component: <Home/>,
    },
    {
        key: "ui",
        title: 'UI',
        isSidebar: true,
        hasChild: true,
        icon: <ScanOutlined/>,
        subs: [
            {
                key: "ui/buttons",
                isSidebar: true,
                isLayout: true,
                title: 'Buttons',
                component: <Damn/>
            },
            {
                key: "ui/icons",
                isSidebar: true,
                isLayout: true,
                title: 'Icons',
                component: <Finish/>
            },
        ]
    },
    {
        key: "login",
        isSidebar: true,
        isLayout: true,
        title: "Logout",
        icon: <LogoutOutlined/>
    }
]

export default menus;
