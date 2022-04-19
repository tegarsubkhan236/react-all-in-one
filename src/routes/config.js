import {HomeFilled, ScanOutlined} from "@ant-design/icons";

const menus = [
    {
        key: "dashboard",
        title: 'Dashboard',
        icon: <HomeFilled/>,
        component: 'Dashboard',
    },
    {
        key: "ui",
        title: 'UI',
        icon: <ScanOutlined/>,
        subs: [
            { key: "ui/buttons", title: 'Buttons', component: 'Buttons' },
            { key: "ui/icons", title: 'Icons', component: 'Icons' },
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
                    { key: "cek/buttons", title: 'Buttons', component: 'Buttons' },
                    { key: "cek/icons", title: 'Icons', component: 'Icons' },
                ]
            },
        ]
    },
]

export default menus;
