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

    const deletePost = (e, index) => {
      e.preventDefault()
      console.log(index)
    }

    return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th><span>Post</span></th>
                      <th><span>Created</span></th>
                      <th className="text-center"><span>Status</span></th>
                      <th><span>Email</span></th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((item, index) => (  
                      <tr key={index}>
                        <td>
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                          <Link to="/" className="user-link">{item.title}</Link>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>
                          2013/08/08
                        </td>
                        <td className="text-center">
                          <span className="label label-default">Inactive</span>
                        </td>
                        <td>
                          {item.desc}
                        </td>
                        <td style={{width: '20%'}}>
                          <div>
                            <Link to="/edit_post" className="table-link">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                              </span>
                            </Link>
                            <a href='/' onClick={(e) => deletePost(e, index)} className="table-link danger">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
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
