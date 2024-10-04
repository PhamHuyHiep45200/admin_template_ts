import { BRAND } from '../../types/brand';

const brandData: BRAND[] = [
  {
    id: 1,
    userName: 'Google',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '5,768',
    createDate: '2024/09/09',
  },
  {
    id: 2,
    userName: 'Twitter',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '4,635',
    createDate: '2024/09/09',
  },
  {
    id: 3,
    userName: 'Github',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '4,290',
    createDate: '2024/09/09',
  },
  {
    id: 4,
    userName: 'Vimeo',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '3,580',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
  {
    id: 5,
    userName: 'Facebook',
    walletAddress: '0x01010101010101010101010101010101010',
    status: '6,768',
    createDate: '2024/09/09',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">ID</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Wallet Address
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Create Date
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0"></div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.id}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.userName}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.walletAddress}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.status}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.createDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
