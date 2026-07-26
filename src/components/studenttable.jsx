import {Link,useParams} from "react-router-dom";
function StudentTable({ students, deleteStudent }) {
  // const {id}=useParams();
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
              <th>profile pic</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student,id) => (
              <tr key={student._id}>
                <td>{student._id+1}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
                <td>
                  <img src={`http://localhost:8000/uploads/${student.image}`}
                  width="80"
                  height="80"
                  alt={student.studentName}>
                                 
                  </img>
                </td>
                <td>
                  <Link to={`/students/${student._id}`}>View </Link>
                  <button onClick={() => { deleteStudent(student._id) }}>Delete</button>
                  <Link to={`/students/edit/${student._id}`}>Edit</Link>
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