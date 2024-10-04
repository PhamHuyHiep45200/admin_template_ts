import { Spin } from 'antd';
import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableUserInfoManage from './ListTable/TableUserInfoManage';

const UserInfo = () => {
  const breadcrumbItems = [
    { name: 'JRE Admin', path: '/home' },
    { name: 'User Informations JRE APP', path: '/user-info' },
  ];
  return (
    <>
      <Breadcrumb
        items={breadcrumbItems}
        pageName="User Informations JRE APP"
      />
      <div className="flex flex-col gap-10">
        {/* <Spin tip="Loading..."> */}
        <TableUserInfoManage />
        {/* </Spin> */}
      </div>
    </>
  );
};

export default UserInfo;
