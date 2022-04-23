import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, Form, Input} from 'antd';
import styles from '../assets/css/login.module.scss';

const SignIn = () => {
    let navigate = useNavigate()
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {
        const {userName, password} = values;
        console.log('Success:', values);
        if (userName === "admin" && password === "admin") {
            navigate("/", {replace: true})
        } else {
            navigate("/login", {replace: true})
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.illustrationWrapper}>
                    <img
                        src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
                        alt="Login"/>
                </div>
                <Form className={styles.loginForm} initialValues={{remember: true}} onFinish={onFinish}
                      onFinishFailed={onFinishFailed}>
                    <p className={styles.formTitle}>Welcome Back</p>
                    <p>Login To Dashboard</p>
                    <Form.Item name="username" rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input className={styles.formInput} placeholder={"Username"}/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input.Password
                            className={styles.formInput}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Link to={"/"}>
                            <Button type="primary" htmlType="submit" className={styles.loginButton}>
                                LOGIN
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default SignIn
