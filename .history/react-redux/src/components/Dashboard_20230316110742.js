import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
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
      <div class="container mt-5">
    
          <div class="row d-flex justify-content-center">
              
              <div class="col-md-7">
                  
                  <div class="card p-3 py-4">
                      
                      <div class="text-center">
                          <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle" alt='pro' />
                      </div>
                      
                      <div class="text-center mt-3">
                          <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                          <h5 class="mt-2 mb-0">{userData?.first_name}</h5>
                          <span>UI/UX Designer</span>
                          
                          <div class="px-4 mt-1">
                              <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          
                          </div>
                          
                          <ul class="social-list">
                              <li><i class="fa fa-facebook"></i></li>
                              <li><i class="fa fa-dribbble"></i></li>
                              <li><i class="fa fa-instagram"></i></li>
                              <li><i class="fa fa-linkedin"></i></li>
                              <li><i class="fa fa-google"></i></li>
                          </ul>
                          
                          <div class="buttons">
                              
                              <button class="btn btn-outline-primary px-4">Message</button>
                              <button class="btn btn-primary px-4 ms-3">Contact</button>
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
