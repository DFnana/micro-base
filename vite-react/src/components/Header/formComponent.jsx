import React, {useEffect, useState} from 'react';
import { Button, Checkbox, Form, Input, Drawer } from 'antd';
import eventEmitter from '../../js/eventEmit.js';

const FormComponet = (props) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      eventEmitter.on('onOpen', (values) => {
        console.log(values,'==valuesvalues=');
        setVisible(values.visible);
      })
    },[])
  


    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo,'errorInfo---');
        
    }

    const onFinish = (values) => {
        eventEmitter.emit('submit', values);
    }

    const onClose = () => {

    }



    return (
      <div>
      <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      
      <Button>点击弹框</Button>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={visible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
        )
}

export default FormComponet;