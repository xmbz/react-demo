import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;
const { TextArea } = Input;
class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const item = this.props.list;
    let formItem;
    switch (item.type) {
      case "input":
        formItem = (
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            labelCol={item.labelCol}
            wrapperCol={item.wrapperCol}
          >
            <Input />
          </Form.Item>
        );
        break;
      case "select":
        formItem = (
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            labelCol={item.labelCol}
            wrapperCol={item.wrapperCol}
          >
            <Select
              placeholder={item.placeholder}
              onChange={item.onChange}
              allowClear
            >
              {item.list.map(el => (
                <Option key={el.value} value={el.value}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        );
        break;
      case "datePicker":
        formItem = (
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            labelCol={item.labelCol}
            wrapperCol={item.wrapperCol}
          >
            <DatePicker />
          </Form.Item>
        );
        break;
      case "textArea":
        formItem = (
          <Form.Item
            name={item.name}
            label={item.label}
            labelCol={item.labelCol}
            wrapperCol={item.wrapperCol}
          >
            <TextArea rows={4} />
          </Form.Item>
        );
        break;
      default:
        break;
    }

    return <div>{formItem}</div>;
  }
}
export default MyForm;
