import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  
  var localUser = localStorage.getItem('user')
  
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
