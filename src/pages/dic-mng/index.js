import React, { Component } from "react";
import DicQuery from "./query";
import DicTable from "./table";
import { getDicTypePage } from "@/request/request";

class DicMng extends Component {
  state = {
    tableData: [],
    searchFrom: {
      pageNum: 1,
      pageSize: 20,
      searchType: 1,
      searchKey: "",
      typeName: "",
      typeCode: ""
    },
    total: 0
  };
  render() {
    return (
      <div>
        <DicQuery onSearch={this.onSearch}></DicQuery>
        <DicTable
          tableData={this.state.tableData}
          total={this.state.total}
          onChange={this.onChange}
          history={this.props.history}
        ></DicTable>
      </div>
    );
  }

  componentDidMount = () => {
    this.getPageData();
  };

  getPageData = () => {
    getDicTypePage(this.state.searchFrom).then(res => {
      this.setState({
        tableData: res.data.pageData,
        total: res.data.totalRows
      });
    });
  };

  onSearch = value => {
    let searchFrom = this.state.searchFrom;
    searchFrom.searchKey = value;
    this.setState({
      searchFrom
    });
    this.getPageData();
  };

  onChange = pageObj => {
    let searchForm = this.state.searchFrom;
    searchForm.pageNum = pageObj.current;
    searchForm.pageSize = pageObj.pageSize;
    this.setState({
      searchForm
    });
    this.getPageData();
  };
}
export default DicMng;
