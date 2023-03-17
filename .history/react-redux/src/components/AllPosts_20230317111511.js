import React, {useEffect, useState} from 'react'
import '../css/Posts.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');
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

    const deletePost = async (e, index) => {
      var jwt_token = localStorage.getItem('token') // here token ....
      setCsrfToken(jwt_token)
      e.preventDefault()
      await axios.delete(`http://localhost:3000/api/delete_post/${index}`, index, 
        {
          withCredentials: true,
          headers: {
            'X-CSRF-TOKEN': csrfToken,
          },
        }
      )
      .then(response => {
        console.log(response?.data)
        setMessage(response?.data?.message)
        toast(response?.data?.message)
        getPosts()
      })
      .catch(error => {
          console.error(error);
          setMessage(error?.response?.data?.message)
          toast(error?.response?.data?.message)
          getPosts()
      });
    }

    return (
    <>
      <div className="container">
        {message && (
            <ToastContainer />
        )}
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
                            { item.user.role_id === 1 && (
                              <span className="user-subhead">
                                Admin
                              </span>
                            )}
                            { item.user.role_id === 2 && (
                              <span className="user-subhead">
                                Author
                              </span>
                            )}
                            { item.user.role_id === 3 && (
                              <span className="user-subhead">
                                Guest
                              </span>
                            )}
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
                            <Link to={`/edit_post/${item.id}`} className="table-link">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                              </span>
                            </Link>
                            <form>
                              <input type="hidden" name="_token" value={csrfToken} />
                              <input type="hidden" name="_method" value="delete" />
                              <a href='/' onClick={(e) => deletePost(e, item.id)} className="table-link danger">
                                <span className="fa-stack">
                                  <i className="fa fa-square fa-stack-2x"></i>
                                  <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                </span>
                              </a>
                            </form>
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
