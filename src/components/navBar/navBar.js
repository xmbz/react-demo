import React from "react";
import { Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      menuList: [
        {
          menuKey: "magic-wall",
          name: "数据中心"
        },
        {
          menuKey: "dic-mng",
          name: "字典管理"
        },
        {
          menuKey: "ruleConfig",
          name: "数据存储"
        },
        {
          menuKey: "commingTask",
          name: "参数配置"
        },
        {
          menuKey: "single",
          name: "单模块"
        }
      ]
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { menuList } = this.state;
    return (
      <div>
        <Menu
          defaultSelectedKeys={["dic-mng"]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          onClick={this._handleClick}
        >
          {menuList.map(item => {
            return (
              <Menu.Item key={item.menuKey} icon={<PieChartOutlined />}>
                {item.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }

  componentDidMount() {}

  _handleClick = e => {
    this.props.history.push(e.key);
  };
}

export default NavBar;
