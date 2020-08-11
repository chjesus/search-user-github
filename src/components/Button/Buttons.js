import React from "react";

import { Col, Button } from "antd";

function Buttons(props) {
  const { type, url, danger, value, target, index, deleteUser } = props;
  return (
    <Col lg={10} xl={7}>
      <Button
        type={type}
        danger={danger}
        href={url}
        target={target}
        onClick={() => {
          deleteUser && deleteUser(index);
        }}
      >
        {value}
      </Button>
    </Col>
  );
}

export default Buttons;
