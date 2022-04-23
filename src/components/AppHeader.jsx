import styles from '../assets/css/header.module.scss'
import {Layout} from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined} from "@ant-design/icons";
const { Header } = Layout;

const AppHeader = ({toggle, collapsed}) => {
    return(
        <Header className={styles.header}>
            {collapsed
                ? <MenuUnfoldOutlined onClick={toggle} className={styles.trigger}/>
                : <MenuFoldOutlined onClick={toggle} className={styles.trigger}/>}
        </Header>
    );
}

export default AppHeader
