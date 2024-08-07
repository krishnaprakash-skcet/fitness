import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updiet.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, fullName: 'Steve Doe', uEmail: 'john@example.com', ContactNo: '1234567890' },
    { id: 2, fullName: 'Jane Smith', uEmail: 'jane@example.com', ContactNo: '9876543210' },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setCurrentUser(null);
    setEditMode(false);
  };

  const handleSave = () => {
    if (editMode) {
      setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
    } else {
      setUsers([...users, { ...currentUser, id: users.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (user) => {
    setUsers(users.filter(u => u.id !== user.id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src="path/to/logo.png" alt="Logo" className="custom-logo" />
          </Link>
          <div className="navbar-collapse collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/about-us"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact-us"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="custom-container">
        <div className="text-right mb-3">
          <button className="btn btn-primary custom-button" onClick={handleShow}>Add New User</button>
        </div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.uEmail}</td>
                <td>{user.ContactNo}</td>
                <td>
                  <button className="btn btn-warning custom-button" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn btn-danger custom-button" onClick={() => handleDelete(user)}>Delete</button>
                  <Link className="btn btn-primary custom-button" to={`/upload-diet-plan/${user.id}`}>Upload Diet Plan</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header custom-modal-header">
                  <h5 className="modal-title">{editMode ? 'Edit User' : 'Add User'}</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" name="fullName" value={currentUser?.fullName || ''} onChange={handleChange} placeholder='Full Name'/>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="uEmail" value={currentUser?.uEmail || ''} onChange={handleChange} placeholder='Email'/>
                    </div>
                    <div className="form-group">
                      <label>Contact No</label>
                      <input type="text" className="form-control" name="ContactNo" value={currentUser?.ContactNo || ''} onChange={handleChange} placeholder='Contact'/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary custom-button" onClick={handleClose}>Close</button>
                  <button type="button" className="btn btn-primary custom-button" onClick={handleSave}>{editMode ? 'Update' : 'Save'}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
