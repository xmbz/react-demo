import React, { Component } from "react";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";

class DicDetailTable extends Component {
  render() {
    const data = this.props.tableData;
    const total = this.props.total;
    const columns = [
      {
        title: "序号",
        dataIndex: "dataIndex",
        align: "center",
        render: (text, record, index) => {
          return index + 1;
        }
      },
      {
        title: "字典编码",
        dataIndex: "itemCode",
        align: "center"
      },
      {
        title: "字典名称",
        dataIndex: "itemName",
        align: "center"
      },
      {
        title: "描述",
        dataIndex: "memo",
        align: "center"
      },
      {
        title: "操作",
        dataIndex: "operate",
        align: "center",
        render: (text, record) => {
          return (
            <React.Fragment>
              <EyeOutlined onClick={this.handleView.bind(this, record)} />
            </React.Fragment>
          );
        }
      }
    ];
    return (
      <Table
        rowKey="id"
        onChange={this.props.onChange}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 20,
          total: total,
          showSizeChanger: true,
          showQuickJumper: true
        }}
      />
    );
  }

  handleView = () => {};
}

export default DicDetailTable;
