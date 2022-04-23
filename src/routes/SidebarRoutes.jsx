import {Menu} from "antd";
import {Link} from "react-router-dom";
import {HomeFilled, ScanOutlined, LoginOutlined} from "@ant-design/icons";

const SidebarRoutes = () => {
  return (
      <Menu mode="inline" theme={"dark"}>
          <Menu.Item key={"home"}>
              <Link to={"/"}>
                  <HomeFilled/>
                  <span>Home</span>
              </Link>
          </Menu.Item>
          <Menu.SubMenu title={"Drop Me"} icon={<ScanOutlined/>} key={"drop-me"}>
              <Menu.Item key={"damn"}>
                  <Link to={"/damn"}>
                      <span>Damn</span>
                  </Link>
              </Menu.Item>
              <Menu.Item key={"finish"}>
                  <Link to={"/finish"}>
                      <span>Finish</span>
                  </Link>
              </Menu.Item>
              <Menu.Item key={"default"}>
                  <Link to={"/default"}>
                      <span>Default</span>
                  </Link>
              </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key={"login"}>
              <Link to={"login"}>
                  <LoginOutlined/>
                  <span>Login</span>
              </Link>
          </Menu.Item>
      </Menu>
  )
}

export default SidebarRoutes
