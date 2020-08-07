import React, { Component } from "react";
import DicDetailQuery from "./query";
import DicDetailTable from "./table";
import DicDetailModal from "./modal";

import { getDicDetailPage } from "@/request/request";
class DicMngDetail extends Component {
  state = {
    searchForm: {
      pageNum: 1,
      pageSize: 20,
      typeCode: ""
    },
    total: 0,
    tableData: [],
    visible: false
  };
  render() {
    return (
      <div>
        <DicDetailQuery
          onSearch={this.onSearch}
          showFormModal={this.showFormModal}
        ></DicDetailQuery>
        <DicDetailTable
          tableData={this.state.tableData}
          total={this.state.total}
          onChange={this.onChange}
        ></DicDetailTable>
        <DicDetailModal
          visible={this.state.visible}
          typeCode={this.state.searchForm.typeCode}
          handleCancel={this.handleCancel}
        ></DicDetailModal>
      </div>
    );
  }

  componentDidMount() {
    let searchForm = this.state.searchForm;
    searchForm.typeCode = this.props.location.search.split("=")[1];
    this.setState({
      searchForm
    });
    this.getPageData();
  }

  getPageData = () => {
    getDicDetailPage(this.state.searchForm).then(res => {
      this.setState({
        tableData: res.data.pageData,
        total: res.data.totalRows
      });
    });
  };
  onSearch = value => {
    let searchForm = this.state.searchForm;
    searchForm.searchKey = value;
    this.setState({
      searchForm
    });
    this.getPageData();
  };

  onChange = pageObj => {
    let searchForm = this.state.searchForm;
    searchForm.pageNum = pageObj.current;
    searchForm.pageSize = pageObj.pageSize;
    this.setState({
      searchForm
    });
    this.getPageData();
  };

  showFormModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
}

export default DicMngDetail;
