import React, { Component } from "react";
import { Modal, Form, message } from "antd";
import MyForm from "@/components/form/form";
import validate from "@/request/validate";
import { dicDetailAdd } from "@/request/request";
class DicDetailModal extends Component {
  formRef = React.createRef();
  state = {
    title: "添加字典"
  };
  render() {
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      }
    };
    const list = [
      {
        type: "input",
        label: "字典编码",
        name: "itemCode",
        ...formItemLayout,
        rules: [
          {
            required: true,
            message: "请输入字典编码"
          },
          {
            validator: async (rule, value) => {
              if (!validate.userName(value)) {
                throw new Error("请输入正确的字典编码!");
              }
            }
          }
        ]
      },
      {
        type: "input",
        label: "字典名称",
        name: "itemName",
        ...formItemLayout,
        rules: [
          {
            required: true,
            message: "请输入字典名称"
          },
          {
            validator: async (rule, value) => {
              if (!validate.userName(value)) {
                throw new Error("请输入正确的字典名称!");
              }
            }
          }
        ]
      },
      {
        type: "input",
        label: "描述",
        name: "memo",
        ...formItemLayout,
        rules: []
      }
    ];
    return (
      <Modal
        title={this.state.title}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form ref={this.formRef}>
          {list.map(item => {
            return <MyForm list={item}></MyForm>;
          })}
        </Form>
      </Modal>
    );
  }

  handleOk = () => {
    this.formRef.current
      .validateFields()
      .then(values => {
        dicDetailAdd(
          Object.assign(values, {
            itemType: this.props.typeCode
          })
        ).then(res => {
          console.log(res);
        });
      })
      .catch(err => {
        message.error("输入有误");
      });
  };
}
export default DicDetailModal;
