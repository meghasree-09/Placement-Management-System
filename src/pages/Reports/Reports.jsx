import "./Reports.css";

function Reports() {
  return (
    <div className="reports">
      <h1>Placement Reports</h1>

      <div className="report-cards">
        <div className="report-card">
          <h2>Total Students</h2>
          <p>250</p>
        </div>

        <div className="report-card">
          <h2>Placed Students</h2>
          <p>180</p>
        </div>

        <div className="report-card">
          <h2>Pending Students</h2>
          <p>70</p>
        </div>

        <div className="report-card">
          <h2>Companies Visited</h2>
          <p>35</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;