import { useEffect, useState } from "react";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setStudents([
  //       id:1,
  //       name:"rahul",
  //       email:"rahul@gmail.com",
  //       phone:"1234567890",
  //       branch:"CSE",
  //       cgpa:8.5,

  //     ])
      
  //   }, timeout);
  // })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
    setLoading(false);
  }, []);

  return (
    <div className="students">
      <h1>Students</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.StudentName}</td>
              <td>{student.Email}</td>
              <td>{student.Phone}</td>
              <td>{student.Branch}</td>
              <td>{student.Cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;