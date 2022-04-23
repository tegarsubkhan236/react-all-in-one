import {Row,Col, Card, Statistic, Calendar} from "antd";
import {ArrowUpOutlined, LikeOutlined} from "@ant-design/icons"
import {useEffect, useState} from "react";

const Home = () => {
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            let timer = setTimeout(() => setLoading(false), 800)
            return () => clearTimeout(timer)
        },[]
    )
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card hoverable={true} loading={loading}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true} loading={loading}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true} loading={loading}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable={true} loading={loading}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Card>
                </Col>

                <Col span={10}>
                    <Card hoverable={true} loading={loading}>
                        <Calendar fullscreen={false} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Home;
