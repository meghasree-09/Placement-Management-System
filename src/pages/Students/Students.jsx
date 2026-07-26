import { Link } from "react-router-dom";
import StudentTable from "../../components/studenttable";
import { useEffect, useState } from "react";
import react from "../../assets/react.svg";
import { AiFillAudio,AiFillCamera } from "react-icons/ai";
import api from "../../api/api"

function Students() {
    const [sortField,setSortField]=useState("studentName");
    const [order,setOrder]=useState("asc")
    const [page,setPage]=useState(1);
    const limit=5;
    const [totalPages,setTotalPages]=useState(1);
    const[search,setSearch] = useState("");  
    const [loading,setLoading] = useState(true);
    const [students,setStudents]=useState([])
    const token=localStorage.getItem("token");


    async function fetchStudent(pageNumber){
        try{
            setLoading(true)
            const response = await api.get(`/students?page=${pageNumber}&limit=${limit}&sort=${sortField}&order=${order}`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            setStudents(response.data.students);
            setTotalPages(response.data.totalPages);
            setPage(response.data.currentPage);
            // console.log(students)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }
    //auto call of featch student
    useEffect(()=>{
        fetchStudent(page);
    },[]);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(false);
    //     },2000)
    // },[]);
    if(loading){
        return <h2>Loading .......</h2>
    }
    //functionality to delete student
    async function deleteStudent(id){
        try{
            await api.delete(`/students/${id}`,
                 {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            fetchStudent()
        }
        catch(error){
            console.log(error)
        }
    }
    async function searchStudents(value){
        setSearch(value)
        try{
            const response=await api.get(`/students/search?q=${value}`,
                 {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
             setStudents(response.data.students);
        }catch(error){
            console.log(error)
        }
       
    }
    // function deleteStudent(id){
    //     const updatedStudents = students.filter(student => student.id !== id);
    //     setStudents(updatedStudents);
    //     // localStorage.setItem("students", JSON.stringify(updatedStudents));
    // } 


//     const filteredStudents = students.filter((student) =>
//         student.StudentName?.toLowerCase().includes(search.toLowerCase())
//         || student.Email?.toLowerCase().includes(search.toLowerCase())
//         || student.Branch?.toLowerCase().includes(search.toLowerCase())
// );   
    

    return (
        <>
            <h1>Student Management</h1>

            <p>Manage all registered students here.</p>

            <Link to="/Register">
                <button>
                    Add New Student
                </button><br /><br />
               
            </Link>
             <AiFillAudio />
             <AiFillCamera />
             <input type="text" 
             placeholder="Search Student..." 
             value={search}
             onChange={(e)=>searchStudents(e.target.value)}/>
            <button disabled={page===1} onClick={()=>fetchStudent(page-1)}>
                Previous
            </button>
               <span>Page {page} of {totalPages}</span>
             <button disabled={page===totalPages} onClick={()=>fetchStudent(page+1)}>
                Next
            </button>
            <select value={sortField}
            onChange={(e)=>{
                setSortField(e.target.value);
                fetchStudent(1);
            }}>
                <option value="studentName">student name</option>
                <option value="cgpa">cgpa</option>
                <option value="branch">branch</option>

            </select>
            order dropdown
            <select 
            value={order}
            onChange={(e)=>{
                setOrder(e.target.value);
                fetchStudent(1);
            }}>
                <option value="asc">ascending </option>
                <option value="dsc">descending </option>
            </select>
            {/* changed props to receive students */}
            <StudentTable students={students} deleteStudent={deleteStudent} />
            <img src={react}/>
        </>
    );
}

export default Students;