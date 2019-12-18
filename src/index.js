import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Dropdown, Button, Icon, message } from "antd";

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="experiment" />
      Sandbox
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="tool" />
      Staging
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="safety-certificate" />
      Production
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div id="components-dropdown-demo-dropdown-button">
    <Dropdown.Button overlay={menu} icon={<Icon type="down" />}>
      <Icon type="experiment" />
      Sandbox
    </Dropdown.Button>
  </div>,
  document.getElementById("container")
);
