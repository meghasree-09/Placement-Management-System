import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api/api";
import "./EditStudent.css";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [loading,setLoading]=useState(true);
  const [updating,setUpdating]=useState(false)

  useEffect(() => {
    fetchStudent();
  }, []);

  async function fetchStudent() {
    try {
      setLoading(true);
      const response = await api.get(`/students/${id}`);

      const student = response.data.student;

      setStudentName(student.studentName);
      setEmail(student.email);
      setPhone(student.phone);
      setBranch(student.branch);
      setCgpa(student.cgpa);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateStudent(e) {
    e.preventDefault();

    try {
      setUpdating(true)
      await api.put(`/students/${id}`, {
        studentName,
        email,
        phone,
        branch,
        cgpa,
      });

      alert("Student Updated Successfully!");

      navigate("/students");
    } catch (error) {
      console.log(error);
      alert("Failed to Update Student");
    }finally{
      setUpdating(false);
    }
  }

  return (
    <div className="edit-container">
      <h1>Edit Student</h1>

      <form onSubmit={updateStudent}>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Branch"
        />

        <input
          type="number"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          placeholder="CGPA"
        />

        <button disabled={updating} type="submit">{updating ? "Updating Student..":"Update student"}</button>
      </form>
    </div>
  );
}

export default EditStudent;