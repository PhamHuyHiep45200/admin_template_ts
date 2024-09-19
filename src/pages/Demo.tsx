import { Card, Table } from 'antd'
import React from 'react'
import InputBase from '../components/base/InputBase'
import ButtonBase from '../components/base/ButtonBase'

function Demo() {
  return (
    <Card>
      <div className='flex flex-col space-y-4'>
        <InputBase placeholder="Enter your first name" />
        <ButtonBase type='primary'>Sign In</ButtonBase>
        <Table pagination={false} className='table_custom' columns={[{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }]} dataSource={[
          {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
        ]}
        />
      </div>
    </Card>
  )
}

export default Demo