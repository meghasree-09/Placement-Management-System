import './App.css'
import Navbar from './components/NavBar/NavBar'
import Heading from './components/Heading' 
import Student from './components/studentdetails'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './pages/Home'
import { useState } from 'react'
import Register from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import { Routes ,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Companies from "./pages/Companies/Companies";
import Placement from './pages/Placements/Placement';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings'
import Students from "./pages/Students/Students";
import NotFound from "./pages/NotFound/NotFound";
import EditStudent from "./pages/EditStudent/EditStudent";
import AuthRegister from './pages/authentication/authRegistration'
import ProtectedRoute from './components/ProtectedRoute'





//App.jsx the root component
//initially everything is displayed from app.jsx

//creating a root component
//js--HTML-->jsx
//jsx--browser
//babel-->help to convert to js
// const div= 
// //fragment
//     <>
//       <h1>Welcome to chalapathi</h1>
//       <p>Learn today and lead tomorrow</p>
      
//     </>
//first component
// const NavBar=function(){
//   return(
//     <h1>Placement Management System</h1>

//   )
// };
//my second component
// const Heading=function(){
//   const name="Mouni"
//   return(
//     //can write js in html
//     <p>Learn today,Lead tomorrow {name}</p>
//   )
// };
function App(){
    const [students,setStudents]=useState(()=>{
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  function addStudent(){
    setStudents(students+1)
    console.log(students)
  }
  return(
    <>
    {/* <h1>{students}</h1>
    <button onClick={addStudent}>Add student</button>
    <Navbar/> */}
    {/* <Heading 
        name="Mouni"
        year={2026}/>
    <Student
        name="Mouni"
        roll="23ht1a05g1"
        branch="CSE"/> */}
        {/* <div className='main'>
           <Sidebar/> */}
           {/* <Home/> */}
           {/* <Register/>
           <Login/> */}
      <Routes>

  <Route element={<Layout/>}>

    <Route path="/" element={<Home/>}/>

    <Route path="/login" element={<Login/>}/>

    <Route path="/auth/register" element={<AuthRegister />} />
    {/* <Route path="/register" element={<Register students={students} setStudents={setStudents} />}/> */}

    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>}/>
    <Route path="/companies" element={<Companies />} />
    <Route path="/placements" element={<Placement/>}/>
    <Route path="/reports" element={<Reports/>}/>
    <Route path='/settings' element={<Settings/>}/>
    

    <Route path="/students" element={
      <ProtectedRoute><Students students={students} setStudents={setStudents} /></ProtectedRoute>} />
    <Route path="/students/:id" element={<ProtectedRoute><Student /></ProtectedRoute>} />
   
    <Route path="/companies/:id" element={<Companies />} />
      
    </Route>
    <Route path="*" element={<NotFound />} />

    <Route path="/students/edit/:id" element={<ProtectedRoute>
      <EditStudent students={students} setStudents={setStudents} />
      </ProtectedRoute>} />
</Routes>
        {/* </div>
         <Footer/> */}
    </>
  )

}
export default App;