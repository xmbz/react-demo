import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./redux/assistant";

function getState(state) {
  // 传入多个模块文件名称
  return mapStateToProps(state, ["car", "shopping"]);
}

function getAction(dispatch) {
  // 传入多个模块action
  return mapDispatchToProps(dispatch, ["carActions", "shoppingActions"]);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCount(count) {
    this.props.addCount(count);
    // this.props.setShopTitle('测试多模块redux成功')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>当前标题为：{this.props.shopTitle}</p>
          <p>当前数量为{this.props.count}</p>
          <button onClick={() => this.addCount(5)}>点击增加数量</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(getState, getAction)(App);
