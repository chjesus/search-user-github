import React from "react";

import { Row, Col, Card, Avatar } from "antd";

import Buttons from "./../Button";

import "./listuser.scss";

const { Meta } = Card;

function User(props) {
  const { allUsers, deleteUser } = props;

  if (!allUsers || allUsers.length === 0) {
    return (
      <Row className="list">
        <Col span={24} className="list-not-found">
          No Users
        </Col>
      </Row>
    );
  }

  return (
    <Row className="list" gutter={16}>
      {allUsers.map((user, index) => (
        <Col className="gutter-row" span={6} key={index}>
          <Card>
            <Meta
              avatar={<Avatar src={user.avatar_url} />}
              title={user.name}
              description={user.bio}
            />

            <Row style={{ width: "100%", marginTop: "20px" }} justify="end">
              <Buttons
                type="link"
                target="_blank"
                url={user.html_url}
                value="Link"
              />
              <Buttons
                type="primary"
                danger={true}
                value="Delete"
                index={index}
                deleteUser={deleteUser}
              />
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default User;
