import { Card, Table } from 'antd';
import React from 'react';
import InputBase from '../components/base/InputBase';
import ButtonBase from '../components/base/ButtonBase';

function Demo() {
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <InputBase placeholder="Enter your first name" />
        {/* <ButtonBase type="primary">Sign In</ButtonBase> */}
        <Table
          pagination={false}
          className="table_custom"
          columns={[
            {
              title: 'ID',
              dataIndex: 'name',
              key: 'name',
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
            },
            {
              title: 'Actions',
              dataIndex: 'actions',
              key: 'actions',
            },
          ]}
          dataSource={[
            {
              key: '1',
              id: 1,
              collectionsName: 'Mike',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Open',
              actions: '10 Downing Street',
            },
            {
              key: '2',
              collectionsName: 'John',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Close',
              actions: '10 Downing Street',
            },
            {
              key: '3',
              collectionsName: 'John',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Close',
              actions: '10 Downing Street',
            },
            {
              key: '4',
              collectionsName: 'John',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Close',
              actions: '10 Downing Street',
            },
            {
              key: '5',
              collectionsName: 'John',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Close',
              actions: '10 Downing Street',
            },
            {
              key: '6',
              collectionsName: 'John',
              publisher: 'JRE Team',
              createdDate: '2024, Sep 02',
              status: 'Close',
              actions: '10 Downing Street',
            },
          ]}
        />
      </div>
    </Card>
  );
}

export default Demo;
