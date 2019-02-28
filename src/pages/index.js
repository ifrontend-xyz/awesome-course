import React from "react";
import "antd/dist/antd.css";
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from "./style.module.less";
import Course from '../components/course'
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Card title="Javascript" className={styles.Column}>
      <Row gutter={16}>
        <Col span={8}>
          <Course
            title="李炎恢JavaScript教程 第一季"
            source="https://study.163.com"
            sourceTitle="网易云课堂"
            link="https://study.163.com/course/courseMain.htm?courseId=252008"
            cover="https://img-ph-mirror.nosdn.127.net/2r4IAK4JnA9s1T8PUaUASg==/6598173676331791619.png?imageView&quality=100&thumbnail=450y250"
          />
        </Col>
        <Col span={8} >

        </Col>
        <Col span={8} />
      </Row>
    </Card>
    <Card title="Jenkins">
      <Row gutter={16}>
        <Col span={8}>
          <Course
            title="Jenkins 训练营：基础篇"
            source="https://ke.qq.com"
            sourceTitle="腾讯课堂"
            link="https://ke.qq.com/course/265167#term_id=100312699"
            cover="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCwX4Spicz9sDfckP7wPuK01CL4Pq2LBATgylzu79tTz1a89mguuic5npOOWHicurqgTc/"
          />
        </Col>
        <Col span={8} >
          <Course
            title="Jenkins 训练营：带你玩转 Pipeline"
            source="https://ke.qq.com"
            sourceTitle="腾讯课堂"
            link="https://ke.qq.com/course/252785#term_id=100298102"
            cover="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCr1RhCMbWGibOEq1nSTCQX6CFJIY69sDXppoVtaY5W1l4MIEGqZJq0iazwG4JORuHoY/"
          />
        </Col>
        <Col span={8} />
      </Row>
    </Card>
  </Layout>
);