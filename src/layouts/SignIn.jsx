import {Link, useNavigate} from "react-router-dom";
import { Form, Input, Button, Typography } from 'antd';
import '../assets/css/login.css';
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const SignIn = () => {
    let navigate = useNavigate()
    const onFinish = (values) => {
        const {userName, password} = values;
        console.log('Success:', values);
        if (userName === "admin" && password === "admin"){
            navigate("/",{replace: true})
        }else{
            navigate("/login",{replace: true})
        }
    };

    return (
        <div className="login">
            <div className="login-form">
                <div className="login-logo">
                    <Typography.Text strong keyboard style={{ color:'#1890ff', fontSize: '25px' }}>
                        My App ANTD
                    </Typography.Text>
                </div>
                <Form onFinish={onFinish} style={{ maxWidth: '300px' }}>
                    <Form.Item
                        name="userName"
                        rules={[{ required: true, message: 'Username tidak boleh kosong!' }]}
                    >
                        <Input
                            prefix={<UserOutlined size={13} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Password tidak boleh kosong!' }]}>
                        <Input
                            prefix={<LockOutlined size={13} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Link to="/">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{ width: '100%' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default SignIn
