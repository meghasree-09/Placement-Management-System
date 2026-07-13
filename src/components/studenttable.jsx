import {Link,useParams} from "react-router-dom";
function StudentTable({ students }) {
  const {id}=useParams;
  return (
    <>
      {students.length === 0 ? 
        <h3>No Student Registered</h3>
       : 
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{student.StudentName}</td>
                <td>{student.Email}</td>
                <td>{student.Phone}</td>
                <td>{student.Branch}</td>
                <td>{student.Cgpa}</td>
                <td>
                  <Link to={`/students/${student.id}`}>View </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default StudentTable;