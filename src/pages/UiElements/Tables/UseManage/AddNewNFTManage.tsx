import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableAddNewNFT from './ListTable/TableAddNewNFT';

const AddNewNFTManage = () => {
  return (
    <>
      <Breadcrumb pageName="Add New NFT" />
      <div className="flex flex-col gap-10">
        <TableAddNewNFT />
      </div>
    </>
  );
};

export default AddNewNFTManage;
