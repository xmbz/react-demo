import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./App.less";
import NavBar from "@/components/navBar/navBar";
import MagicWall from "@/pages/magic-wall/index";
import DicMng from "@/pages/dic-mng/index";
import DicMngDetail from "@/pages/dic-mng/dicMng-detail/index";
import Single from "@/single";
import DataCenter from "@/pages/dataCenter/index"

const { Sider, Content } = Layout;
class App extends Component {
  render() {
    const pathname = this.props.history.location.pathname
    let content
    if (pathname != "/data-center") {
      content = <Layout className="base-container">
        <Sider className="base-side">
          <NavBar history={this.props.history}></NavBar>
          <div className="middleLine"></div>
        </Sider>
        <Layout className="base-layout">
          <Content>
            <Route path={`/dic-mng`} component={DicMng}></Route>
            <Route path={`/dicMng-detail`} component={DicMngDetail}></Route>
            <Route path={`/single`} component={Single}></Route>
            <Route path={`/magic-wall`} component={MagicWall}></Route>
          </Content>
        </Layout>
      </Layout>
    } else {
      content = <Route path={`/data-center`} component={DataCenter}></Route>
    }
    return (
      <div>
        {content}
      </div>
    );
  }

  componentDidMount() {
   
  }
}

export default App;
