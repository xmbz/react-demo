import React, { Component } from "react";
import { Input } from "antd";
import "@/App.less";

const { Search } = Input;

class DicQuery extends Component {
  render() {
    return (
      <div className="clearfix query">
        <Search
          className="fr"
          placeholder="输入字典类型查询"
          onSearch={this.props.onSearch}
          style={{ width: 200 }}
        />
      </div>
    );
  }
}
export default DicQuery;
