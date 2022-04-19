import Main from "../layouts/Main";
import {Content} from "antd/es/layout/layout";

const Home = () => {
    return (
        <Main>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                Home
            </Content>
        </Main>
    );
};

export default Home;
