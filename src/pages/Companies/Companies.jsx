import "./Companies.css";
import { Link, useParams } from "react-router-dom";

function Companies() {

  const { id } = useParams();

  const companies = [
    {
      id: 1,
      name: "TCS",
      package: "3.5 LPA",
      location: "Hyderabad",
      role: "Software Developer",
      vacancies: 50
    },
    {
      id: 2,
      name: "Infosys",
      package: "4.5 LPA",
      location: "Bangalore",
      role: "Full Stack Developer",
      vacancies: 40
    },
    {
      id: 3,
      name: "Wipro",
      package: "5 LPA",
      location: "Chennai",
      role: "Java Developer",
      vacancies: 30
    },
    {
      id: 4,
      name: "Accenture",
      package: "6 LPA",
      location: "Pune",
      role: "Cloud Engineer",
      vacancies: 25
    }
  ];


  // Company Details Page (/companies/1)
  if (id) {

    const company = companies.find(
      (company) => company.id === Number(id)
    );

    if (!company) {
      return <h2>Company Not Found</h2>;
    }

    return (
      <div className="company-details">

        <h1>{company.name}</h1>

        <p>
          <strong>Package:</strong> {company.package}
        </p>

        <p>
          <strong>Location:</strong> {company.location}
        </p>

        <p>
          <strong>Role:</strong> {company.role}
        </p>

        <p>
          <strong>Vacancies:</strong> {company.vacancies}
        </p>

        <Link className="details-btn" to="/companies">
          Back to Companies
        </Link>

      </div>
    );
  }


  // Companies List Page (/companies)
  return (
    <div className="companies">

      <h1>Recruiting Companies</h1>

      <div className="company-container">

        {
          companies.map((company) => (

            <div className="company-card" key={company.id}>

              <h2>{company.name}</h2>

              <p>
                <strong>Package:</strong> {company.package}
              </p>

              <Link
                className="details-btn"
                to={`/companies/${company.id}`}
              >
                View Details
              </Link>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Companies;