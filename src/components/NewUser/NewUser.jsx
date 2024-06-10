
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import logo2 from "./Success.png"

export function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [role, setRole] = useState('');
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleGroupChange(event) {
    const { options } = event.target;
    const selectedGroups = [];
    for (const option of options) {
      if (option.selected) {
        selectedGroups.push(option.value);
      }
    }
    setGroups(selectedGroups);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name: name,
      username: username,
      email: email,
      employeeId: employeeId,
      password: password,
      rePassword: rePassword,
      role: role,
      groups: groups,
    };
    console.log(JSON.stringify(userData)); // Log JSON data
    setShowModal(true); // Show the modal on form submission
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className="container mt-5">
      <div className="border border-primary rounded p-4">
        <h2 className="mb-4">Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="name">Enter Name</label>
              <input
                type="text"
                className="form-control border border-primary"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="username">Enter User Name</label>
              <input
                type="text"
                className="form-control border border-primary"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="email">Enter E-Mail ID</label>
              <input
                type="email"
                className="form-control border border-primary"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                type="text"
                className="form-control border border-primary"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                className="form-control border border-primary"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rePassword">Re-Enter Password</label>
              <input
                type="password"
                className="form-control border border-primary"
                id="rePassword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="role">Select Role</label>
              <select
                className="form-control border border-primary"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Select Role</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="groups">Select Group</label>
              <select
                multiple
                className="form-control border border-primary"
                id="groups"
                value={groups}
                onChange={handleGroupChange}
              >
                <option>Group 1</option>
                <option>Group 2</option>
                <option>Group 3</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
      
      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src= {logo2} alt="Success" className="img-fluid mb-3" />
          <h4 className="text-primary">successful</h4>
          <p>You have successfully added </p>
          <p>user to the IoT Portal</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
