import Breadcrumb from '../../components/Breadcrumb';
import TableThree from '../../components/FilledTable';

const Member = () => {
  // const TableHeaders = [
  //   { name: 'Member Name' },
  //   { name: 'Email' },
  //   { name: 'Mobile' },
  //   { name: 'Role' },
  //   { name: 'Status' },
  //   { name: 'Actions' },
  // ];
  return (
    <>
      <Breadcrumb pageName="Member Table" />
      <div className="flex flex-col gap-10">
        {/* <TableThree TableHeaders={TableHeaders} /> */}
      </div>
    </>
  );
};

export default Member;
