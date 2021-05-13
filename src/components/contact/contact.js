import React from "react";
import { Form, Input, Button, Space, message } from "antd"
import svgss from "../../assets/icons/blur.svg"
import fire from '../../fire'
import moment from "moment";
export default function HomeContact() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    const date = moment().format("YYYYMMDDHHmmss")
    const newDoc = fire.firestore().collection("feedback").doc(date)
    newDoc.set({
      name: values.name,
      email: values.email,
      feedback: values.feedback,
      date: date
    }).then(() => {form.resetFields(); message.success("Амжилттай илгээлээ 😊")})
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="w-full my-20 font-dosis">
      <div className="max-w-7xl mx-auto ring-2 ring-gray-200 bg-white rounded-md shadow-md p-20 relative ">
        <p className="text-4xl font-medium text-black mb-10">Санал хүсэлт</p>
        <Form
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Space direction="horizontal" className="w-full ">
            <Space direction="vertical" className=" w-620 mr-10">
              <span className="text-black font-semibold ">Таны нэр:</span>
              <Form.Item
                name="name"
                rules={
                  [{
                    required: true
                  }]
                }
              >
                <Input className="border-none focus:border-b-2 shadow-lg text-black focus:ring-0 h-12" autoComplete="off" />
              </Form.Item>
              <span className="text-black font-semibold"> Таны цахим хаяг:</span>

              <Form.Item
                name="email"
                rules={
                  [{
                    type: "email",
                    required: true
                  }]
                }
              >
                <Input className="border-none shadow-lg  focus:ring-0 text-black  rounded-lg  h-12 " autoComplete="off" />
              </Form.Item>
            </Space>
            <Space direction="vertical" className=" w-480">
              <span className="text-black font-semibold"> Санал хүсэлтээ бичнэ үү</span>
              <Form.Item
                name="feedback"
                rules={
                  [{
                    required: true
                  }]
                }
              >
                <Input.TextArea className="border-none shadow-lg text-black    focus:ring-0 h-36 rounded-lg" autoComplete="off" autoSize />
              </Form.Item>
            </Space>
          </Space>
          <Form.Item >
            <Button type="primary" htmlType="submit" className="border-none bg-gray-200 rounded-3xl shadow-lg font-medium w-36 h-12 hover:bg-gray-300 text-sm text-primary-100 hover:text-purple-700">
              ИЛГЭЭХ
        </Button>
          </Form.Item>
        </Form>
        <img src={svgss} alt="ss" width="20%" height="100px" className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 z-10 opacity-50 text-primary-500 fill-current w-24" />

      </div>
    </div>

  )
}
