import { Button, Card, Pagination, Popover, Table, Tag } from 'antd';
import { useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  VerticalAlignBottomOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';
import InputBase from '../../../../../components/base/InputBase';
import { datalActiveHistory } from '../../../../../types/DataActiveHistory';

const TableActiveHistory = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data] = useState(datalActiveHistory);
  const itemsPerPage = 8;

  //   pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const content = () => (
    <div className="flex flex-col space-y-2">
      <Button
        htmlType="button"
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Sell clicked');
        }}
      >
        <VerticalAlignBottomOutlined />
        DownLoad
      </Button>
      <Button
        htmlType="button"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Transfer clicked');
        }}
      >
        <EditOutlined />
        Transfer
      </Button>
      <Button
        htmlType="button"
        danger
        onClick={(e) => {
          e.stopPropagation();
          console.log('Remove clicked');
        }}
      >
        <DeleteOutlined />
        Remove
      </Button>
    </div>
  );

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <InputBase
          placeholder="Enter the content you want to search for"
          icon={<ZoomInOutlined />}
        />

        <Table
          pagination={false}
          className="table_custom"
          columns={[
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Use Name',
              dataIndex: 'useName',
              key: 'useName',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'Wallet Address',
              dataIndex: 'wallletAddress',
              key: 'wallletAddress',
            },
            {
              title: 'Transaction Time',
              dataIndex: 'transactionTime',
              key: 'transactionTime',
            },
            {
              title: 'Transaction Hash',
              dataIndex: 'transactionHash',
              key: 'transactionHash',
            },

            {
              title: 'Transaction Status',
              dataIndex: 'transactionStatus',
              key: 'transactionStatus',
              render: (transactionStatus: string) => {
                let color: string;

                switch (transactionStatus) {
                  case 'failed':
                    color = 'red';
                    break;
                  case 'pending':
                    color = 'yellow';
                    break;

                  default:
                    color = 'green';
                    break;
                }

                return (
                  <Tag color={color} key={transactionStatus}>
                    {transactionStatus.toUpperCase()}
                  </Tag>
                );
              },
            },
            {
              title: 'Smart Contract',
              dataIndex: 'smartContract',
              key: 'smartContract',
            },

            {
              title: 'Actions',
              dataIndex: 'actions',
              key: 'actions',
              render: (_: any) => (
                <Popover content={content()}>
                  <EllipsisOutlined
                    className="text-center"
                    onClick={(e) => e.stopPropagation()}
                  />
                </Popover>
              ),
            },
          ]}
          dataSource={currentItems}
        />
      </div>

      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={data.length}
        onChange={onPageChange}
        className="mt-5 justify-center"
      />
    </Card>
  );
};

export default TableActiveHistory;
