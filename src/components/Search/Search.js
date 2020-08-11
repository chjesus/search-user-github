import React, { useState } from "react";

import { USER_STORAGE } from "./../../utils/constants";

import { Row, Col, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./search.scss";

const { Search } = Input;

function Searchs(props) {
  const { setMessage, allUsers } = props;

  const [loading, setLoading] = useState(false);

  const addUserLocalStorage = (data) => {
    let allUserArray = [];

    if (allUsers) allUserArray = allUsers;

    const resultado = allUserArray.find((user) => user.id === data.id);

    if (resultado) {
      setMessage("already");
    } else {
      allUserArray.push(data);
      localStorage.setItem(USER_STORAGE, JSON.stringify(allUserArray));
      allUserArray = [];
      setMessage("success");
    }
  };

  const setSearchUser = async (value) => {
    if (value === "") {
      setMessage("empty");
    } else {
      setLoading(true);

      try {
        const response = await fetch(`https://api.github.com/users/${value}`);
        if (response.status !== 200) {
          setMessage("error");
        } else {
          const data = await response.json();
          addUserLocalStorage(data);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return (
    <Row>
      <Col span={24} className="search">
        <Search
          className="search-input"
          placeholder="Search user"
          onSearch={(value) => setSearchUser(value)}
          prefix={<UserOutlined className="search-icon" />}
          loading={loading}
        />
      </Col>
    </Row>
  );
}

export default Searchs;
