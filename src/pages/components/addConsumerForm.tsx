import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
} from 'antd';

import { api } from "~/utils/api";

type SizeType = Parameters<typeof Form>[0]['size'];

const AddConsumerForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [showEmail, setShowEmail ] = useState<boolean>(false)

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const toggelShowEmail = (val: boolean) => {
    setShowEmail(val)
  }
 function some () {

    const addConsumer = api.post.getAllUser.useQuery()
    console.log(addConsumer)
 }
some()
  const onFinish = (e:any) => {
    console.log("") 
    some()
  }
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <Form.Item label="First Name" name="firstname">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="lastname">
        <Input />
      </Form.Item>
      <Form.Item label="Gender">
        <Select>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="DatePicker" name="birthday">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Has Email">
        <Switch onChange={(e)=>toggelShowEmail(e)}/>
      </Form.Item>
      {showEmail &&
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      }
        <Button htmlType='submit'>Submit</Button>
    </Form>
  );
};

export default AddConsumerForm;