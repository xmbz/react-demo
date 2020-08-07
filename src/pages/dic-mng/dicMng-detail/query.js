import React from "react";
import { Link } from "react-router-dom";
import { Input, Breadcrumb, Button } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import "@/App.less";
import {connect} from "react-redux"
import {dicState} from "@/redux/assistant"
const { Search } = Input;

class DicDetailQuery extends React.Component {
  render() {
    return (
      <div className="page">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Link to="/dic-mng">字典管理</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.typeName}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mgt10">
          <Button
            className="mgr10"
            type="primary"
            icon={<PlusOutlined />}
            onClick={this.props.showFormModal}
          >
            添加
          </Button>
          <Search
            placeholder="输入字典名称查询"
            onSearch={this.props.onSearch}
            style={{ width: 200 }}
            className="fr"
          />
        </div>
      </div>
    );
  }
}

export default connect(dicState)(DicDetailQuery);
