import { ArrowLeftOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';

const TableAddNewNFT = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/nft-manage');
  };
  return (
    <>
      <div className="flex items-center space-x-2 text-[26px] text-black font-bold mb-8">
        <ArrowLeftOutlined className="back-icon" onClick={handleBackClick} />
        <span>Add New NFT</span>
      </div>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Name NFT
                </label>
                <input
                  type="text"
                  placeholder="Enter Name NFT"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Owner
                </label>
                <input
                  type="text"
                  placeholder="Enter Owner"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Publisher
                </label>
                <input
                  type="text"
                  placeholder="Enter Publisher"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Contract Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Contract Address"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Created Date
                </label>
                <DatePicker
                  placeholder="Select Date"
                  className="custom-datepicker w-full h-[50px] rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  needConfirm
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Transaction Status
                </label>
                <input
                  type="text"
                  placeholder="Enter Transaction Status"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableAddNewNFT;
