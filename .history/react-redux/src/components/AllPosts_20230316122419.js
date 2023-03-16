import React from 'react'
import '../css/Posts.css'

const AllPosts = () => {
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
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" / />
                        <a href="/" class="user-link">Mila Kunis</a>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>
                        2013/08/08
                      </td>
                      <td class="text-center">
                        <span class="label label-default">Inactive</span>
                      </td>
                      <td>
                        <a href="#">mila@kunis.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" / />
                        <a href="/" class="user-link">George Clooney</a>
                        <span class="user-subhead">Member</span>
                      </td>
                      <td>
                        2013/08/12
                      </td>
                      <td class="text-center">
                        <span class="label label-success">Active</span>
                      </td>
                      <td>
                        <a href="#">marlon@brando.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        <a href="#" class="user-link">Ryan Gossling</a>
                        <span class="user-subhead">Registered</span>
                      </td>
                      <td>
                        2013/03/03
                      </td>
                      <td class="text-center">
                        <span class="label label-danger">Banned</span>
                      </td>
                      <td>
                        <a href="#">jack@nicholson</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                        <a href="#" class="user-link">Emma Watson</a>
                        <span class="user-subhead">Registered</span>
                      </td>
                      <td>
                        2004/01/24
                      </td>
                      <td class="text-center">
                        <span class="label label-warning">Pending</span>
                      </td>
                      <td>
                        <a href="#">humphrey@bogart.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                        <a href="#" class="user-link">Robert Downey Jr.</a>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>
                        2013/12/31
                      </td>
                      <td class="text-center">
                        <span class="label label-success">Active</span>
                      </td>
                      <td>
                        <a href="#">spencer@tracy</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                        <a href="#" class="user-link">Mila Kunis</a>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>
                        2013/08/08
                      </td>
                      <td class="text-center">
                        <span class="label label-default">Inactive</span>
                      </td>
                      <td>
                        <a href="#">mila@kunis.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                        <a href="#" class="user-link">George Clooney</a>
                        <span class="user-subhead">Member</span>
                      </td>
                      <td>
                        2013/08/12
                      </td>
                      <td class="text-center">
                        <span class="label label-success">Active</span>
                      </td>
                      <td>
                        <a href="#">marlon@brando.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <a href="#" class="user-link">Ryan Gossling</a>
                        <span class="user-subhead">Registered</span>
                      </td>
                      <td>
                        2013/03/03
                      </td>
                      <td class="text-center">
                        <span class="label label-danger">Banned</span>
                      </td>
                      <td>
                        <a href="#">jack@nicholson</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <a href="#" class="user-link">Emma Watson</a>
                        <span class="user-subhead">Registered</span>
                      </td>
                      <td>
                        2004/01/24
                      </td>
                      <td class="text-center">
                        <span class="label label-warning">Pending</span>
                      </td>
                      <td>
                        <a href="#">humphrey@bogart.com</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                        <a href="#" class="user-link">Robert Downey Jr.</a>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>
                        2013/12/31
                      </td>
                      <td class="text-center">
                        <span class="label label-success">Active</span>
                      </td>
                      <td>
                        <a href="#">spencer@tracy</a>
                      </td>
                      <td style="width: 20%;">
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
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
              <ul class="pagination pull-right">
                <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPosts
