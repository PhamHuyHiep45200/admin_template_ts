import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableNFTManage from './ListTable/TableNFTManage';

const NFTManage = () => {
  return (
    <>
      <Breadcrumb pageName="NFT Management" />
      <div className="flex flex-col gap-10">
        <TableNFTManage />
      </div>
    </>
  );
};

export default NFTManage;
