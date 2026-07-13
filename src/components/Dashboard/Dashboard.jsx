import { useState,useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import Clock from "../Clock/Clock";

function Dashboard() {
  const [Totalstudents, setTotalstudents] = useState(250);
  const [Companies, setCompanies] = useState(35);
  const [Placed, setPlaced] = useState(180);
  const [Pending, setPending] = useState(70);

  const [Name, setName] = useState("Megha");

  const [students, setStudents] = useState([]);

  function addstudent() {
    setStudents(["Rahul", "Ravi", "Anjali"]);
  }

  function increase() {
    setTotalstudents(Totalstudents + 1);
  }

  function Addcompany() {
    setCompanies(Companies + 1);
  }

  function addplaced() {
    setPlaced(Placed + 1);
  }

  function increasepending() {
    setPending(Pending + 1);
  }

  function changename() {
    setName("Meghana");
  }

  function resetstudent() {
    setTotalstudents(250);
  }
  useEffect(()=>{
    alert("Welcome Admin")
  },[]);

  return (
    <div className="dashboard">

      <h1>Welcome Back, {Name}</h1>
      <Clock/>

      

      <hr />

      <button className="change-btn" onClick={changename}>
        Change Name
      </button>

      <div className="cards">

        <div className="card">
          <h2>{Totalstudents}</h2>
          <p>Total Students</p>
          <button onClick={increase}>Add Student</button>
          <button onClick={resetstudent}>Reset</button>
        </div>

        <div className="card">
          <h2>{Companies}</h2>
          <p>Companies</p>
          <button onClick={Addcompany}>Add Company</button>
        </div>

        <div className="card">
          <h2>{Placed}</h2>
          <p>Placed Students</p>
          <button onClick={addplaced}>Increase</button>
        </div>

        <div className="card">
          <h2>{Pending}</h2>
          <p>Pending Students</p>
          <button onClick={increasepending}>Increase</button>
        </div>

      </div>

      <div className="student-list">
        <button onClick={addstudent}>Show Students</button>

        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>

      {/* Nested Routes Render Here */}
      <Outlet />

    </div>
  );
}

export default Dashboard;