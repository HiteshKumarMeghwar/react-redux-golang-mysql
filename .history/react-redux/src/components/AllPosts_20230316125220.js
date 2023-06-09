import React, {useEffect, useState} from 'react'
import '../css/Posts.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const getPosts = async () => {
      await axios.get('http://localhost:3000/api/all_posts', {withCredentials: true})
      .then(response => {
          // console.log(response?.data?.posts);
          setPosts(response?.data?.posts)
      })
      .catch(error => {
          console.error(error);
      });
    }

    useEffect(() => {
        var user = localStorage.getItem('user');
        if(!user) {
          navigate("/login")
        }else{
          getPosts()
        }
    }, [navigate]);

    return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th><span>User</span></th>
                      <th><span>Created</span></th>
                      <th class="text-center"><span>Status</span></th>
                      <th><span>Email</span></th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <Link to="/" class="user-link">Mila Kunis</Link>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>
                        2013/08/08
                      </td>
                      <td class="text-center">
                        <span class="label label-default">Inactive</span>
                      </td>
                      <td>
                        <a href="/">mila@kunis.com</a>
                      </td>
                      <td style={{width: '20%'}}>
                        <a href="/" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="/" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="/" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPosts
