import "./Placement.css";

function Placement() {
  return (
    <div className="placement">
      <h1>Placements</h1>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Company</th>
            <th>Package</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sahasra</td>
            <td>TCS</td>
            <td>3.5 LPA</td>
            <td>Placed</td>
          </tr>

          <tr>
            <td>Meghana</td>
            <td>Infosys</td>
            <td>4.5 LPA</td>
            <td>Placed</td>
          </tr>

          <tr>
            <td>Gayathri</td>
            <td>Accenture</td>
            <td>6 LPA</td>
            <td>Placed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Placement;