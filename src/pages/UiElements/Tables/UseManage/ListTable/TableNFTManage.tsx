import {
  Button,
  Card,
  Drawer,
  message,
  Pagination,
  Popover,
  Table,
  Tag,
} from 'antd';
import { useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  KeyOutlined,
  PlusOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';
import InputBase from '../../../../../components/base/InputBase';
import { dataNFTMangeSource } from '../../../../../types/DataNFTMange';
import { useNavigate } from 'react-router-dom';

const TableNFTManage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedNFTManage, setSelectedNFTManage] = useState<any>(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const [data, setData] = useState(dataNFTMangeSource);
  const [totalItems, setTotalItems] = useState<number>(0);
  const itemsPerPage = 8;

  //   pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(`/nft-manage?page=${page}`);
      const result = await response.json();
      setData(result.data);
      setTotalItems(result.total);
    } catch (error) {
      message.error('An error occurred while loading data!');
    }
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/nft-manage?page=${page}`);
  };
  const handeClickDetailNFTManage = (record: any) => {
    setSelectedNFTManage(record);
    setIsDrawerVisible(true);
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
        <KeyOutlined />
        Resell
      </Button>
      <Button
        htmlType="button"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Transfer clicked');
        }}
      >
        <EditOutlined />
        Edit
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
  const showActions = () => (
    <div className="flex flex-col space-y-2">
      <Button
        htmlType="button"
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Sell clicked');
        }}
      >
        <KeyOutlined />
        Sell
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
  const handleAddNewClick = () => {
    navigate('/add-new-nft-manage');
  };

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <InputBase
          placeholder="Enter your first name"
          icon={<ZoomInOutlined />}
        />

        <div className="flex justify-end items-end">
          <Button type="primary" onClick={handleAddNewClick}>
            <PlusOutlined /> Add New
          </Button>
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
              title: 'Name NFT',
              dataIndex: 'nameNFT',
              key: 'nameNFT',
            },
            {
              title: 'Owner',
              dataIndex: 'owner',
              key: 'owner',
            },
            {
              title: 'Publisher',
              dataIndex: 'publisher',
              key: 'publisher',
            },
            {
              title: 'Contract Address',
              dataIndex: 'contractAddress',
              key: 'contractAddress',
            },
            {
              title: 'Created Date',
              dataIndex: 'createdDate',
              key: 'createdDate',
            },
            {
              title: 'Category',
              dataIndex: 'category',
              key: 'category',
            },
            {
              title: 'Transaction Status',
              dataIndex: 'status',
              key: 'status',
              render: (status: string) => {
                let color: string;

                switch (status) {
                  case 'Sold':
                    color = 'red';
                    break;
                  case 'Pending':
                    color = 'yellow';
                    break;
                  case 'Transferred':
                    color = 'blue';
                    break;
                  case 'Inactive':
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
          onRow={(record) => {
            return {
              onClick: () => handeClickDetailNFTManage(record),
            };
          }}
        />
      </div>

      <Drawer
        title="NFT Information Own"
        placement="right"
        onClose={() => setIsDrawerVisible(false)}
        open={isDrawerVisible}
        width="50vw"
      >
        {selectedNFTManage && (
          <div className="p-[20px] flex flex-col gap-5">
            <div style={{ textAlign: 'center' }}>
              <img
                className="w-full h-[400px] rounded-[10px]"
                src={selectedNFTManage.NFTImage}
                alt=""
              />
            </div>

            <div className="bg-default p-[15px] rounded-[10px] text-white">
              <p>
                <strong>Name NFT :</strong> {selectedNFTManage.nameNFT}
              </p>
              <p>
                <strong>Owner :</strong> {selectedNFTManage.owner}
              </p>
              <p>
                <strong>Publisher:</strong> {selectedNFTManage.publisher}
              </p>
              <p>
                <strong>ContractAddress:</strong>{' '}
                {selectedNFTManage.contractAddress}
              </p>
              <p>
                <strong>Created Date:</strong> {selectedNFTManage.createdDate}
              </p>
              <p>
                <strong>Category:</strong> {selectedNFTManage.category}
              </p>
              <p>
                <strong>Transaction Status: </strong>
                {selectedNFTManage.status}
              </p>

              {/* <div className="flex justify-between">
                <p>
                  <strong>actions:</strong>
                  {selectedNFTManage.transactionDate}
                </p>
              </div> */}
              <p>
                <strong className="text-red">Actions : </strong>
                <Popover content={showActions()}>
                  <EditOutlined className="text-danger" />
                </Popover>
              </p>
            </div>
          </div>
        )}
      </Drawer>

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

export default TableNFTManage;
