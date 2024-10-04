import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableWalletInfoManage from './ListTable/TableWalletInfoManage';
const WallerInfo = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Wallet Infomations" /> */}
      <div className="flex flex-col gap-10">
        <TableWalletInfoManage />
      </div>
    </>
  );
};

export default WallerInfo;
