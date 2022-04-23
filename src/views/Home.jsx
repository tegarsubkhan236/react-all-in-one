import {Row,Col, Card, Statistic, Calendar} from "antd";
import {ArrowUpOutlined, LikeOutlined} from "@ant-design/icons"
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(
        () => {
            let timer = setTimeout(
                () => axios.get("api/public/daily/wiki")
                    .then(res => {
                        if (res.data){
                            setData(res.data)
                            setLoading(false)
                        }
                        console.log(res.data)
                    }), 800)
            return () => clearTimeout(timer)
        },[]
    )

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card hoverable={true}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            loading={loading}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />}  loading={loading} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />}  loading={loading} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />}  loading={loading}/>
                    </Card>
                </Col>

                <Col span={10}>
                    <Card hoverable={true} loading={loading}>
                        <Calendar fullscreen={false}/>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Home;
