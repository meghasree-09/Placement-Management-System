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
import Students from "./pages/Students/Students";
import NotFound from "./pages/NotFound/NotFound";





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
  const [students,setStudents]=useState([])
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

    <Route path="/register" element={<Register/>}/>

    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/companies" element={<Companies />} />
    

    <Route path="/students" element={<Students />} />
    <Route path="/students/:id" element={<Student />} />
   
    <Route path="/companies/:id" element={<Companies />} />
     
  </Route>
  <Route path="*" element={<NotFound />} />

</Routes>
        {/* </div>
         <Footer/> */}
    </>
  )

}
export default App;