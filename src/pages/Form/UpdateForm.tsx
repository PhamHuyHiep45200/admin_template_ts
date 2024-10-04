// UpdateForm.tsx
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Space, message, Select } from 'antd';
import * as Yup from 'yup';

interface UpdateFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => Promise<void>;
  editItem: any;
}

const validationSchema = Yup.object().shape({
  collectionsName: Yup.string().required('Collections Name is required'),
  publisher: Yup.string().required('Publisher is required'),
  createdDate: Yup.string().required('Created Date is required'),
  status: Yup.array().min(1, 'At least one status is required'),
});

const UpdateForm: React.FC<UpdateFormProps> = ({
  visible,
  onCancel,
  onSubmit,
  editItem,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleFinish = async (values: any) => {
    try {
      await validationSchema.validate({ ...values, status: selectedItems });
      await onSubmit({ ...values, status: selectedItems });
    } catch (error) {
      console.error('Validation or submission error:', error); // Ghi log lỗi để kiểm tra
      message.error(error.errors[0]); // Hiển thị thông báo lỗi
    }
  };
  const OPTIONS = ['Open', 'Close', 'Pending'];

  return (
    <Modal title="Update Item" open={visible} footer={null} onCancel={onCancel}>
      <Form
        layout="vertical"
        onFinish={handleFinish}
        initialValues={editItem} // Đảm bảo initialValues được cập nhật
      >
        <Form.Item
          label="Collections Name"
          name="collectionsName"
          rules={[{ required: true, message: 'Collections Name is required' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Publisher"
          name="publisher"
          rules={[{ required: true, message: 'Publisher is required' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Created Date"
          name="createdDate"
          rules={[{ required: true, message: 'Created Date is required' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            { required: true, message: 'At least one status is required' },
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

        <div className="flex justify-end">
          <Button onClick={onCancel} style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
