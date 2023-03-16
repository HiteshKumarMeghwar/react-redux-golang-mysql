import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
      var user = localStorage.getItem('user');
      if(!user) {
          navigate("/login")
      }

      var User = JSON.parse(user)
      setUserData(User);
  }, [setIsLoggedIn, navigate]);

  console.log(userData)
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
