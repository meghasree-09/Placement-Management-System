import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import api from "../../api/api";

function AuthRegister() {
  
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [error,setError]=useState("");
  async function registerUser(e){
    e.preventDefault();
    try{
      setLoading(true);
      setError("")
      const userData={
        name,
        email,
        password,
        role
      };
      const response=await api.post("/auth/register",userData);
      alert(response.data.message)
      setName("");
      setEmail("");
      setPassword("");
      setRole("student");
      Navigate("/login")
      
    }catch(error){
      const message=error.response?.data?.message || "Registration failed"
      setError(message)
    }finally{
      setLoading(false);
    }
  }
  return(
    
    <form onSubmit={registerUser}>
        <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value="role"
          onChange={(e)=>setRole(e.target.value)}
          required>
            <option>Admin</option>
            <option>Student</option>
    
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Registering":"Register"}

          </button>
          {error && <p>{error}</p>}
          <p>Already have an account?<Link to ="/login">Login</Link></p>
          

    </form>
  )

}
export default AuthRegister;