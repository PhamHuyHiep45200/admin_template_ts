import Breadcrumb from '../../../../components/Breadcrumbs/Breadcrumb';
import TableActiveHistory from './ListTable/TableActiveHistory';

const ActiveHistory = () => {
  return (
    <>
      <Breadcrumb pageName="Active History" />
      <div className="flex flex-col gap-10">
        <TableActiveHistory />
      </div>
    </>
  );
};

export default ActiveHistory;
