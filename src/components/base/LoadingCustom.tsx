import { Spin } from 'antd';

const CustomLoading = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Spin size="large" tip="Loading....." />
    </div>
  );
};
export default CustomLoading;
