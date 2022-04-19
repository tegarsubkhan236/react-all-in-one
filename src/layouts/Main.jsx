import '../assets/css/dashboard.css'
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import CollapseProvider from "../context/AppContext"
import { Layout } from 'antd';

export default function Main({ children }) {
    return (
        <CollapseProvider>
            <Layout>
                <AppSidebar/>
                <Layout className="site-layout">
                    <AppHeader/>
                    {children}
                </Layout>
            </Layout>
        </CollapseProvider>
    );
}
