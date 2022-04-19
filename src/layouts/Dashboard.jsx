import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import CollapseProvider from "../context/AppContext"
import { Layout } from 'antd';
const { Content } = Layout;

export default function Dashboard() {
    return (
        <CollapseProvider>
            <Layout>
                <AppSidebar/>
                <Layout className="site-layout">
                    <AppHeader/>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Click Me
                    </Content>
                </Layout>
            </Layout>
        </CollapseProvider>
    );
}
