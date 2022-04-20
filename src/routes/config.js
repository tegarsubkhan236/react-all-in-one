import {HomeFilled, ScanOutlined, LogoutOutlined} from "@ant-design/icons";
import Home from "../views/Home";
import Damn from "../views/Damn";
import Finish from "../views/Finish";
import Test from "../views/Test";

const menus = [
    {
        key: "home",
        title: 'Dashboard',
        icon: <HomeFilled/>,
        component: <Home/>,
    },
    {
        key: "ui",
        title: 'UI',
        icon: <ScanOutlined/>,
        subs: [
            { key: "ui/buttons", title: 'Buttons', component: <Damn/> },
            { key: "ui/icons", title: 'Icons', component: <Finish/> },
        ]
    },
    {
        key: "cek",
        title: 'CEK',
        icon: <ScanOutlined/>,
        subs: [
            {
                key: "extend",
                title: "extend",
                icon: <ScanOutlined/>,
                subs:[
                    { key: "cek/buttons", title: 'Buttons', component: <Test/> },
                    { key: "cek/icons", title: 'Icons', component: <Damn/> },
                ]
            },
        ]
    },
    {
        key: "login",
        title: "Logout",
        icon: <LogoutOutlined/>
    }
]

export default menus;
