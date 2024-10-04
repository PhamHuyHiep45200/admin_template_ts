import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Form, Spin } from 'antd';
import LabelValueField from '../../../../../components/base/Labelvalue';
import Breadcrumb from '../../../../../components/Breadcrumbs/Breadcrumb';

interface Address {
  address: string;
  city: string;
  state: string;
}
interface User {
  id: string;
  firstName: string;
  lastName: string;
  maidenname: string;
  age: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  address: Address;
  country: string;
}
const WalletInfomations = () => {
  const { id, hairColor } = useParams<{ id: string; hairColor: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id && hairColor) {
      fetchUserDetail(id, hairColor); // Gọi hàm fetch với ID và màu tóc
    }
  }, [id, hairColor]);

  const fetchUserDetail = async (hair: string, value: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/filter?key=${hair}.color&value=${value}`,
      );
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error('Error fetching user details', error);
    }
  };

  if (!user) {
    return (
      <div className="items-center justify-center">
        <Spin tip="Loading..."></Spin>
      </div>
    );
  }
  const breadcrumbItems = [
    { name: 'JRE Admin', path: '/home' },
    { name: 'User Informations JRE APP', path: '/user-info' },
    { name: 'Detail User Informations', path: '/user-info/:id' },
    { name: 'Detail User Informations', path: '/user-info/:id' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} pageName="Detail User Informations" />

      {/* <div className="text-[30px] mb-5 text-black">Detail User Information</div> */}
      <div className="text-black bg-[#F8F9FE] w-full pt-5 pb-10 items-center justify-center  rounded-2xl">
        <div className="px-[100px] pt-4">
          <Form layout="vertical">
            <LabelValueField label="First Name" value={user.firstName} />
            <LabelValueField label="Last Name" value={user.lastName} />
            <LabelValueField label="From Mail " value={user.maidenname} />
            <LabelValueField label="Age" value={user.age} />
            <LabelValueField label="Email" value={user.email} />
            <LabelValueField label="Phone" value={user.phone} />
            <LabelValueField label="User Name" value={user.username} />
            <LabelValueField label="Image" value={user.image} />
            <LabelValueField label="Country" value={user.country} />
          </Form>
          <div className="flex justify-end items-end !mt-[30px]">
            <Button danger> Information Wallet</Button>
            <Button type="default" className="mx-6">
              NFT Information Available
            </Button>
            <Button type="primary">Active History</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletInfomations;
