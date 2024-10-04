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
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { dataSource } from '../../../../types/DataSource';
import InputBase from '../../../../components/base/InputBase';
import UpdateForm from '../../../Form/UpdateForm';
import { useNavigate } from 'react-router-dom';

const NFtCollectionManage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState<boolean>(false);
  const [data, setData] = useState(dataSource);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [editItem, setEditItem] = useState<any>(null);

  const itemsPerPage = 8;
  const [selectedNFTCollection, setSelectedNFTCollection] = useState<any>(null);
  const [isDrawerVisibleNFTCollection, setIsDrawerVisibleNFTCollection] =
    useState<boolean>(false);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(`/nft-collections-management?page=${page}`);
      const result = await response.json();
      setData(result.data);
      setTotalItems(result.total);
    } catch (error) {
      message.error('Có lỗi xảy ra khi tải dữ liệu!');
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/nft-collections-management?page=${page}`);
  };

  const handleUpdate = async (values: any) => {
    try {
      if (!editItem || !editItem.id) {
        throw new Error('Item không hợp lệ.');
      }

      const updatedItem = { ...editItem, ...values };

      setData((prevData) =>
        prevData.map((item) =>
          item.id === updatedItem.id ? updatedItem : item,
        ),
      );

      // Đóng modal
      setIsVisibleUpdate(false);
      message.success('Cập nhật thành công!');
    } catch (error) {
      message.error(error instanceof Error ? error.message : 'Có lỗi xảy ra!');
    }
  };

  const handelCancel = () => {
    setEditItem(null);
    setIsVisibleUpdate(false);
  };
  const content = (item: any) => (
    <div>
      <Button danger>
        <EditOutlined />
        UpDate
      </Button>
    </div>
  );
  const handleClickDetailNFTCollectionManage = (record: any) => {
    setSelectedNFTCollection(record);
    setIsDrawerVisibleNFTCollection(true);
  };
  const showActions = (item: any) => (
    <div>
      <Button danger>
        <EditOutlined />
        View
      </Button>
    </div>
  );
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <InputBase placeholder="Enter the NFT Collections" />
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
              title: 'Collections Name',
              dataIndex: 'collectionsName',
              key: 'collectionsName',
            },
            {
              title: 'Publisher',
              dataIndex: 'publisher',
              key: 'publisher',
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
                let color = status.length > 5 ? 'orange' : 'green';
                if (status === 'Close') {
                  color = 'red';
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
                  <EllipsisOutlined className="text-center" />
                </Popover>
              ),
            },
          ]}
          dataSource={currentItems}
          onRow={(record) => {
            return {
              onClick: () => handleClickDetailNFTCollectionManage(record),
            };
          }}
        />
      </div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={data.length}
        onChange={onPageChange}
        className="mt-5 justify-center"
      />
      <Drawer
        title="Wallet Infomartions "
        placement="right"
        onClose={() => setIsDrawerVisibleNFTCollection(false)}
        open={isDrawerVisibleNFTCollection}
        width="50vw"
      >
        {selectedNFTCollection && (
          <div className="p-[20px] flex flex-col gap-5">
            <div style={{ textAlign: 'center' }}>
              <img
                className="w-full h-[400px] rounded-[10px]"
                src={selectedNFTCollection.NFTImage}
                alt=""
              />
            </div>
            <div className="bg-default p-[15px] rounded-[10px] text-white">
              <p>
                <strong>User Name:</strong>{' '}
                {selectedNFTCollection.collectionsName}
              </p>
              <p>
                <strong>Publisher :</strong> {selectedNFTCollection.publisher}
              </p>
              <p>
                <strong>Create Date :</strong>{' '}
                {selectedNFTCollection.createdDate}
              </p>
              <p>
                <strong>Status :</strong> {selectedNFTCollection.status}
              </p>
              <p>
                <strong className="text-red">Actions : </strong>
                <Popover content={showActions(selectedNFTCollection)}>
                  <EditOutlined className="text-danger" />
                </Popover>
              </p>
            </div>
          </div>
        )}
      </Drawer>

      <UpdateForm
        visible={isVisibleUpdate}
        onCancel={handelCancel}
        onSubmit={handleUpdate}
        editItem={editItem}
      />
    </Card>
  );
};

export default NFtCollectionManage;
