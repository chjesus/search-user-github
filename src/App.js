import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Searchs from "./components/Search";
import ListUser from "./components/ListUser";

import { USER_STORAGE } from "./utils/constants";

import { Layout, message } from "antd";

import "./App.scss";

const { Header, Content } = Layout;

function App() {
  const [messageNotification, setMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [realoadUser, setReloadUser] = useState([]);

  const error = () => message.error("User not Found");
  const success = () => message.success("User Found");
  const already = () => message.warning("The user has already been added");
  const empty = () => message.warning("Empty Field");

  useEffect(() => {
    const allUsersStorage = localStorage.getItem(USER_STORAGE);
    const allUserArray = JSON.parse(allUsersStorage);
    setAllUsers(allUserArray);
    setReloadUser(false);
  }, [realoadUser, messageNotification]);

  useEffect(() => {
    if (messageNotification === "error") error();
    else if (messageNotification === "success") success();
    else if (messageNotification === "already") already();
    else if (messageNotification === "empty") empty();
    setMessage("");
    // setReloadUser(true);
  }, [messageNotification]);

  const deleteUser = (index) => {
    allUsers.splice(index, 1);
    setAllUsers(allUsers);
    localStorage.setItem(USER_STORAGE, JSON.stringify(allUsers));
    setReloadUser(true);
  };

  return (
    <Layout className="container">
      <Header>
        <Nav />
      </Header>
      <Content className="container-user">
        <Searchs setMessage={setMessage} allUsers={allUsers} />
        <ListUser allUsers={allUsers} deleteUser={deleteUser} />
      </Content>
    </Layout>
  );
}

export default App;
