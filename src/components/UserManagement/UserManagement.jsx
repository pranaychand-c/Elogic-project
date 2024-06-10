import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo1.png'


export function UserManagement() {
    const navigate = useNavigate();
    function handleCreateUser() {
        const actionData = {
          action: "navigate",
          target: "create-user"
        };
        console.log(JSON.stringify(actionData)); // Log JSON data
        navigate('/create-user');
      }
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky ">
            <ul className="nav flex-column m-2">
              <li className="nav-item" >
                <a className="nav-link active" href="#">
                  <i className="bi bi-gear"></i>
                  User Management
                </a>
                <div className="mb-3">
        <Link to="/create-user" className="btn btn-primary">Create User</Link>
      </div>
                <ul className="nav flex-column ml-3 m-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-person"></i>
                      Users
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-people"></i>
                      Groups
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">User Management</h1>
          </div>
          <div className="text-center">
            <img src={logo} alt="Create Users" className="img-fluid" />
            <p>No Users Created</p>
            <button className="btn btn-primary mt-4" onClick={handleCreateUser}>
          Create Users
        </button>
          </div>
        </main>
      </div>
    </div>
  );
    }

