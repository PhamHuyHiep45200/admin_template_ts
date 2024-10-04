import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableNFTInfoAvailable from './ListTable/TableNFTInfoAvailable';

const NFTInfoAvailable = () => {
  return (
    <>
      <Breadcrumb pageName="Available NFT Infomations" />
      <div className="flex flex-col gap-10">
        <TableNFTInfoAvailable />
      </div>
    </>
  );
};

export default NFTInfoAvailable;
