import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
} from 'antd';
import NFtCollectionManage from './NFtCollectionManage';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';

const NFTCollections = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [nftData, setNftData] = useState<
    { status: string; [key: string]: any }[]
  >([]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancelAddNew = () => {
    setIsModalVisible(false);
  };
  const handleSubmidAddNew = (values: any) => {
    console.log('Form Values:', values);

    setNftData((prev) => [...prev, { ...values, status: selectedItems }]);
    setIsModalVisible(false);
    setSelectedItems([]);
    success();
  };

  const OPTIONS = ['Open', 'Close', 'Pending'];

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Breadcrumb pageName="NFT Collections" />

      <div className="flex flex-col gap-10">
        <div className="flex justify-end items-end">
          <Button type="primary" onClick={showModal}>
            <PlusOutlined /> Add New
          </Button>
        </div>
        <Modal
          title="Add New Collection"
          open={isModalVisible}
          onCancel={handleCancelAddNew}
          footer={null}
        >
          <Form layout="vertical" onFinish={handleSubmidAddNew}>
            <Form.Item
              label="Id"
              name="id"
              rules={[
                {
                  required: true,
                  message: 'Please input the ID !',
                },
              ]}
            >
              <Input placeholder="Enter ID " />
            </Form.Item>
            <Form.Item
              label="Collections Name"
              name="collectionName"
              rules={[
                {
                  required: true,
                  message: 'Please input the collection name!',
                },
              ]}
            >
              <Input placeholder="Enter collection name" />
            </Form.Item>
            <Form.Item
              label="Publisher"
              name="publisher"
              rules={[
                {
                  required: true,
                  message: 'Please input the publisher!',
                },
              ]}
            >
              <Input placeholder="Enter publisher" />
            </Form.Item>
            <Form.Item
              label="Created Date"
              name="created date"
              rules={[
                {
                  required: true,
                  message: 'Please input the created date!',
                },
              ]}
            >
              <DatePicker
                onChange={onChange}
                needConfirm
                style={{ width: '100%' }}
                placeholder="Enter created date"
              />
            </Form.Item>
            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: 'Please select at least one status!',
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select statuses"
                value={selectedItems}
                onChange={(values) => {
                  setSelectedItems(values);
                }}
                style={{ width: '100%' }}
                options={OPTIONS.map((item) => ({ value: item, label: item }))}
              />
            </Form.Item>

            <Form.Item
              label="Actions"
              name="actions"
              rules={[
                {
                  required: true,
                  message: 'Please input the actions!',
                },
              ]}
            >
              <Input placeholder="Enter actions " />
            </Form.Item>

            <div className="flex justify-end">
              <Button
                onClick={handleCancelAddNew}
                style={{ marginRight: '10px' }}
              >
                Cancel
              </Button>
              {contextHolder}
              <Space>
                <Button type="primary" htmlType="submit" onClick={success}>
                  Submit
                </Button>
              </Space>
            </div>
          </Form>
        </Modal>
        <NFtCollectionManage />
      </div>
    </>
  );
};

export default NFTCollections;
