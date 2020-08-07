import React, { Component } from "react";
import "./App.less";
// React-Redux提供一个connect方法能够让你把组件和store连接起来。
import { connect } from "react-redux";
import { carState, carAction } from "./redux/assistant";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCount(count) {
    this.props.addCount(count);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>当前标题为：{this.props.title}</p>
          <p>当前数量为{this.props.count}</p>
          <button onClick={() => this.addCount(5)}>点击增加数量</button>
        </header>
      </div>
    );
  }
}
export default connect(carState, carAction)(Single);
