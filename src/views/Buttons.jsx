import Main from "../layouts/Main";
import {Content} from "antd/es/layout/layout";

const Buttons = () => {
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
                Buttons
            </Content>
        </Main>
    );
};

export default Buttons;
