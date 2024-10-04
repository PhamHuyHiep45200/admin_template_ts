import { Button, Card, Drawer, Pagination, Popover, Table, Tag } from 'antd';
import { useState } from 'react';
import {
  ArrowsAltOutlined,
  EllipsisOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';
import { dataWalletSource } from '../../../../../types/DateWalletSource';
import InputBase from '../../../../../components/base/InputBase';
import { useNavigate } from 'react-router-dom';

const TableWalletInfoManage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState(dataWalletSource);
  const [editItem, setEditItem] = useState<any>(null);
  const [selectedWallet] = useState<any>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleEdit = (item: any) => {
    setEditItem({ ...item });
  };
  const handleViewNFTAvailable = (item: any) => {
    navigate(`/nft-available`);
  };
  const content = (item: any) => (
    <div className="flex flex-col space-y-2">
      <Button
        htmlType="button"
        type="primary"
        onClick={() => {
          handleViewNFTAvailable(item);
        }}
      >
        <ArrowsAltOutlined />
        View
      </Button>
    </div>
  );
  const onShowSizeChange = (current: number, size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1);
  };
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          {/* <InputBase placeholder="Enter the name wallet" /> */}
          <InputBase
            placeholder="Enter the name wallet"
            icon={<ZoomInOutlined />}
          />
        </div>
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
              title: 'User Name',
              dataIndex: 'userName',
              key: 'username',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'Wallet Address',
              dataIndex: 'walletAddress',
              key: 'walletaddress',
            },
            {
              title: 'Wallet Type',
              dataIndex: 'walletType',
              key: 'wallettype',
              render: (walletType: string) => {
                let color: string;
                color = walletType === 'Suica' ? '#33CC33' : '#666666';
                return (
                  <Tag color={color} key={walletType}>
                    {walletType === 'Suica' ? 'SUICA' : 'NO SUICA'}
                  </Tag>
                );
              },
            },
            {
              title: 'Created Date',
              dataIndex: 'createdDate',
              key: 'createdDate',
            },

            {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
              render: (status: string) => {
                let color: string;

                switch (status) {
                  case 'Close':
                    color = 'red';
                    break;
                  case 'Pending':
                    color = 'yellow';
                    break;
                  case 'Verified':
                    color = 'blue';
                    break;
                  case 'Unverified':
                    color = 'purple';
                    break;
                  default:
                    color = 'green';
                    break;
                }

                return (
                  <Tag color={color} key={status}>
                    {status.toUpperCase()}
                  </Tag>
                );
              },
            },

            {
              title: 'Actions',
              dataIndex: 'actions',
              key: 'actions',
              render: (_: any, record: any) => (
                <Popover content={content(record)}>
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
        className="mt-5 justify-center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={data.length}
        onChange={onPageChange}
        showSizeChanger={true}
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={['5', '10', '20']}
        showTotal={(total) => `Total ${total} items`}
      />
    </Card>
  );
};

export default TableWalletInfoManage;
