import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Registration.css";
// import StudentTable from "../../components/StudentTable";
import api from "../../api/api"

function Register() {
  const [students,setStudents]=useState([])
  const [studentName, setStudentName] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  const [errors, setErrors] = useState({});
  const [image,setImage]=useState(null);
  const [formData,setFormData]=useState()


  // async function registerstudent(event) {
  //   event.preventDefault();

    // let validationErrors = {};

    // // Name Validation
    // if (StudentName.trim() === "") {
    //   validationErrors.StudentName = "Name is required";
    // }

    // setErrors(validationErrors);

    // if (Object.keys(validationErrors).length > 0) {
    //   return;
    // }

    // // Email Validation
    // const emailpattern =
    //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailpattern.test(Email)) {
    //   alert("Enter a valid Email");
    //   return;
    // }

    // // Password Validation
    // const passwordpattern =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (!passwordpattern.test(Password)) {
    //   alert(
    //     "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
    //   );
    //   return;
    // }

    // // Phone Validation
    // if (Phone.length !== 10) {
    //   alert("Enter a valid 10-digit Phone Number");
    //   return;
    // }

    // // CGPA Validation
    // if (Cgpa < 0 || Cgpa > 10) {
    //   alert("Enter a valid CGPA (0-10)");
    //   return;
    // }

    // Student Object
  //   const student = {
  //     // id:Date.now(),
  //     studentName,
  //     email,
  //     phone,
  //     branch,
  //     cgpa,
  //   };
  //   try{
    
  //     await api.post("/students",  {
  //   studentName: studentName,
  //   email: email,
  //   password: Password,
  //   phone: phone,
  //   branch: branch,
  //   cgpa: cgpa,
  // } );
  //     alert("success") 
  //     //clear form
  //     setStudentName("");
  //     setPassword("");
  //     setEmail("");
  //     setPhone("");
  //     setBranch("");
  //     setCgpa("");
  //     setErrors({}); 
  //   }catch(error){
  //     console.log(error)
  //   }

    // Get existing students
    // const existingStudents =
    //   JSON.parse(localStorage.getItem("students")) || [];

    // // Add new student
    // existingStudents.push(student);

    //  const updatedStudents =[...students, student];
    // setStudents(updatedStudents);

    // Save to localStorage
    
    // localStorage.setItem(
    //       "students",
    //       JSON.stringify(updatedStudents)
    //     );
        // navigate("/students");

        // Update table

        // localStorage.setItem("students", JSON.stringify(existingStudents));
    // Clear Form
  // }
  async function registerstudent(event) {
  event.preventDefault();
   const student = {
    studentName,
    email,
    phone,
    branch,
    cgpa: Number(cgpa),
    image
  };
  //formdata allows sending text and image together in one req
  formData.append("studentName",studentName);
  formData.append("email",email);
  formData.append("phone",phone);
  formData.append("branch",branch);
  formData.append("cgpa",cgpa);
  formData.append("image",image);

  try {
    setLoading(true)
    console.log(student);

    const response = await api.post(
      "/students",
      formData,
      {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
    );

    console.log(response.data);

    alert("Student Registered Successfully");

    setStudentName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setErrors({});

    navigate("/students");
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
  }finally{
            setLoading(false);
        }
}

  return (
    <div className="register-container">
      <h1>Registration Page</h1>

      <form onSubmit={registerstudent}>
        <input
          type="text"
          placeholder="Enter Username"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        {errors.studentName && (
          <p style={{ color: "red" }}>{errors.studentName}</p>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />
        {/* profile picture input from the user */}
        <input
        type="file"
        accept="image/*"
        onChange={(e)=>setImage(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>{loading ? "Registering .." : "Register"}</button>
      </form>

      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>

      {/* <StudentTable students={students} /> */}
    </div>
  );
}

export default Register;