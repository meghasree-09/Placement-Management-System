import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    setStudent(students[id - 1]);
  }, [id]);

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="student-details">
      <h1>Student Details</h1>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{student.StudentName}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{student.Email}</td>
          </tr>

          <tr>
            <th>Phone</th>
            <td>{student.Phone}</td>
          </tr>

          <tr>
            <th>Branch</th>
            <td>{student.Branch}</td>
          </tr>

          <tr>
            <th>CGPA</th>
            <td>{student.Cgpa}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;  