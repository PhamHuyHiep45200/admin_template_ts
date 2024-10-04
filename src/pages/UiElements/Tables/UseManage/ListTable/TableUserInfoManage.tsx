import { Button, Card, message, Pagination, Popover, Table } from 'antd';
import { useEffect, useState } from 'react';
import {
  ClearOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import InputBase from '../../../../../components/base/InputBase';
import { useNavigate } from 'react-router-dom';

interface Hair {
  color: string;
  type: string;
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  maidenName: string;
  email: string;
  password: string;
  birthDate: string;
  hair: Hair;
}

const TableUserInfoManage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<User[]>([]);
  const [totalItems, setTotalItems] = useState<number>(30);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isLoadingUseInfo, setIsLoadingUseInfo] = useState<boolean>(true);
  const [searchUser, setSearchUser] = useState<string>('');

  const navigate = useNavigate();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  const handleSearch = () => {
    fetchData(currentPage, itemsPerPage, searchUser);
  };
  const handleClearSearch = () => {
    setSearchUser('');
  };
  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const fetchData = async (
    page: number,
    limit: number,
    search: string = '',
  ) => {
    setIsLoadingUseInfo(true);
    const skip = (page - 1) * limit;
    try {
      let response;
      if (searchUser) {
        response = await fetch(
          `https://dummyjson.com/users/search?q=${search}`,
        );
      } else {
        response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
        );
      }

      const result = await response.json();

      if (result && result.users) {
        const users: User[] = result.users.map((data: any) => ({
          id: data?.id,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          maidenName: data.maidenName,
          email: data.email,
          password: data.password,
          birthDate: data.birthDate,
          hair: data.hair,
        }));
        setData(users);
        setIsLoadingUseInfo(false);
        setTotalItems(result.total);
      } else {
        message.error('Error !');
        console.log('>>? result', result.user);
      }
    } catch (error) {
      message.error('An error occurred while loading data!');
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/user-info?page=${page}`);
  };

  const onShowSizeChange = (size: number) => {
    setItemsPerPage(size);
    setIsLoadingUseInfo(true);
    setCurrentPage(1);
  };

  const content = (item: User) => (
    <div className="flex flex-col space-y-2">
      <Button htmlType="button" type="primary">
        View
      </Button>
    </div>
  );

  const handleDetailUser = (Id: number) => {
    navigate(`/user-info/${Id}`);
  };

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <div className="flex">
          <InputBase
            placeholder="Enter your first name"
            className="w-[80%]"
            value={searchUser}
            onChange={handleSearchChange}
          />
          <Button danger className="mx-3" onClick={handleClearSearch}>
            <ClearOutlined />
            Clear
          </Button>
          <Button type="primary" onClick={handleSearch}>
            <SearchOutlined />
            Search
          </Button>
        </div>
        <Table
          pagination={false}
          loading={isLoadingUseInfo}
          className="table_custom"
          columns={[
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'firstName',
              dataIndex: 'firstName',
              key: 'firstName',
            },
            {
              title: 'lastName',
              dataIndex: 'lastName',
              key: 'lastName',
            },
            {
              title: 'User Name',
              dataIndex: 'username',
              key: 'username',
            },
            {
              title: 'maidenName',
              dataIndex: 'maidenName',
              key: 'maidenName',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'password',
              dataIndex: 'password',
              key: 'password',
            },
            {
              title: 'birthDate',
              dataIndex: 'birthDate',
              key: 'birthDate',
            },
            {
              title: 'hair',
              key: 'hair',
              render: (text: any, record: User) => (
                <div>
                  {record.hair.color},{record.hair.type}
                </div>
              ),
            },
            {
              title: 'Actions',
              dataIndex: 'actions',
              key: 'actions',
              render: (_: any, record: User) => (
                <Popover content={content(record)} trigger="click">
                  <EllipsisOutlined className="text-center" />
                </Popover>
              ),
            },
          ]}
          dataSource={data.map((item) => ({ ...item, key: item.id }))}
          onRow={(record) => {
            return {
              onClick: () => handleDetailUser(record.id),
            };
          }}
        />
      </div>

      <Pagination
        className="mt-5 justify-center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={totalItems}
        showSizeChanger={true}
        onShowSizeChange={onShowSizeChange}
        onChange={onPageChange}
        pageSizeOptions={['5', '10', '15', '20', '25']}
        showTotal={(total) => `Total ${total} items`}
      />
    </Card>
  );
};

export default TableUserInfoManage;
