import { useParams } from "react-router-dom";

function CompanyDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>Company Details</h1>
      <h2>Company ID: {id}</h2>
    </div>
  );
}

export default CompanyDetails;