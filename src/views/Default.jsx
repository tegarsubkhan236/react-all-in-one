import {Content} from "antd/es/layout/layout";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

const Default = () => {
    return (
        <Content className="content">
            <Result
                status="403"
                title="WELCOME TO DASHBOARD"
                subTitle="Let's start your journey by clicking this button."
                extra={
                    <Link to="/home">
                        <Button type="primary">Dashboard</Button>
                    </Link>
                }
            />
        </Content>
    );
};

export default Default;
