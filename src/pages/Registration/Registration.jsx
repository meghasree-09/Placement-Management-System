import { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import StudentTable from "../../components/StudentTable";

function Register() {
  const [StudentName, setStudentName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("");
  const [Cgpa, setCgpa] = useState("");

  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  function registerstudent(event) {
    event.preventDefault();

    let validationErrors = {};

    // Name Validation
    if (StudentName.trim() === "") {
      validationErrors.StudentName = "Name is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Email Validation
    const emailpattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailpattern.test(Email)) {
      alert("Enter a valid Email");
      return;
    }

    // Password Validation
    const passwordpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordpattern.test(Password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
      );
      return;
    }

    // Phone Validation
    if (Phone.length !== 10) {
      alert("Enter a valid 10-digit Phone Number");
      return;
    }

    // CGPA Validation
    if (Cgpa < 0 || Cgpa > 10) {
      alert("Enter a valid CGPA (0-10)");
      return;
    }

    // Student Object
    const student = {
      id:Date.now(),
      StudentName,
      Email,
      Phone,
      Branch,
      Cgpa,
    };

    // Get existing students
    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    // Add new student
    existingStudents.push(student);

    // Save to localStorage
    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    // Update table
    setStudents(existingStudents);

    alert("Registration Successful");

    // Clear Form
    setStudentName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setErrors({});
  }

  return (
    <div className="register-container">
      <h1>Registration Page</h1>

      <form onSubmit={registerstudent}>
        <input
          type="text"
          placeholder="Enter Username"
          value={StudentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        {errors.StudentName && (
          <p style={{ color: "red" }}>{errors.StudentName}</p>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Branch"
          value={Branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter CGPA"
          value={Cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <StudentTable students={students} />
    </div>
  );
}

export default Register;