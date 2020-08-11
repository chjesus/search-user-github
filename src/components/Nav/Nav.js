import React from "react";

import { GithubOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./nav.scss";

function Nav() {
  return (
    <Row className="nav">
      <Col span={1} className="nav-col">
        <GithubOutlined className="nav-col-icon" />
      </Col>
      <Col span={23}>
        <p className="nav-text">Search user with github</p>
      </Col>
    </Row>
  );
}

export default Nav;
