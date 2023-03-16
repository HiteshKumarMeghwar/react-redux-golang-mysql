import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/ProfileCss.css'

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
  }, [setUserData, navigate]);

  console.log(userData)
  return (
    <>
      <div className="container mt-5">
    
          <div className="row d-flex justify-content-center">
              
              <div className="col-md-7">
                  
                  <div className="card p-3 py-4">
                      
                      <div className="text-center">
                          <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" alt='pro' />
                      </div>
                      
                      <div className="text-center mt-3">
                          <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                          <h5 className="mt-2 mb-0">{userData?.first_name} {userData?.last_name}</h5>
                          <span>{userData?.email}</span>
                          
                          <div className="px-4 mt-1">
                              <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          
                          </div>
                          
                          <ul className="social-list">
                              <li><i className="fa fa-facebook"></i></li>
                              <li><i className="fa fa-dribbble"></i></li>
                              <li><i className="fa fa-instagram"></i></li>
                              <li><i className="fa fa-linkedin"></i></li>
                              <li><i className="fa fa-google"></i></li>
                          </ul>
                          
                          <div className="buttons">
                              
                              <Link to='/my_posts' className="btn btn-outline-primary px-4">My Posts</Link>
                              <Link to='/edit_post' className="btn btn-primary px-4 ms-3">Edit Profile</Link>
                          </div>
                          
                          
                      </div>
                      
                    
                      
                      
                  </div>
                  
              </div>
              
          </div>
          
      </div>
    </>
  )
}

export default Dashboard
