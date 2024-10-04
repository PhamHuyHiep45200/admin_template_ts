import { Button, Card, Pagination, Popover, Table, Tag } from 'antd';
import { useState } from 'react';
import {
  ArrowsAltOutlined,
  EllipsisOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';
import InputBase from '../../../../../components/base/InputBase';
import { dataListNFTOwnerSource } from '../../../../../types/DataListNFTOwner';
import { useNavigate } from 'react-router-dom';

const TableNFTInfoAvailable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data] = useState(dataListNFTOwnerSource);
  const itemsPerPage = 8;

  //   pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickActivityHistory = () => {
    navigate(`/activity-history`);
  };

  const content = (item: any) => (
    <div className="flex flex-col space-y-2">
      <Button
        htmlType="button"
        type="primary"
        onClick={() => {
          handleClickActivityHistory();
        }}
      >
        <ArrowsAltOutlined /> View NFT Available
      </Button>
    </div>
  );

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <InputBase
          placeholder="Enter your first name"
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
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'User Name',
              dataIndex: 'userName',
              key: 'userName',
            },
            {
              title: 'ID NFT',
              dataIndex: 'idNFT',
              key: 'idNFT',
            },
            {
              title: 'NFT Name',
              dataIndex: 'NFTName',
              key: 'NFTName',
            },
            {
              title: 'NFT Type',
              dataIndex: 'NFTType',
              key: 'NFTType',
            },
            {
              title: 'Aquistion Date',
              dataIndex: 'aquistionDate',
              key: 'aquistionDate',
            },
            {
              title: 'Transaction Date',
              dataIndex: 'transactionDate',
              key: 'transactionDate',
            },
            {
              title: 'Transaction Status',
              dataIndex: 'transactionStatus',
              key: 'transactionStatus',
              render: (transactionStatus: string) => {
                let color: string;

                switch (transactionStatus) {
                  case 'In Transaction':
                    color = 'red';
                    break;
                  case 'Pending':
                    color = 'yellow';
                    break;
                  case 'Transferred':
                    color = 'blue';
                    break;
                  case 'Sold':
                    color = 'purple';
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
            // {
            //   title: 'Actions',
            //   dataIndex: 'actions',
            //   key: 'actions',
            //   render: (_: any) => (
            //     <Popover content={()}>
            //       <EllipsisOutlined
            //         className="text-center"
            //         onClick={(e) => e.stopPropagation()}
            //       />
            //     </Popover>
            //   ),
            // },
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

export default TableNFTInfoAvailable;
