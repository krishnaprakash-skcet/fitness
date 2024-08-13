import React, { useState, useEffect } from 'react';
import './thome.css';

const AdminLandingPage = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [workout, setWorkout] = useState('');
    const [dietImage, setDietImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [editStatusClient, setEditStatusClient] = useState(null);
    const [status, setStatus] = useState('');
    const [totalUsers, setTotalUsers] = useState(0);
    const [activeUsers, setActiveUsers] = useState(0);

    useEffect(() => {
        fetchClients();
        fetchActiveUserCount();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/registration');
            const data = await response.json();
            setClients(data);
            setTotalUsers(data.length);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const fetchActiveUserCount = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/registration/count/active');
            const count = await response.json();
            setActiveUsers(count);
        } catch (error) {
            console.error('Error fetching active user count:', error);
        }
    };

    const handleClientSelect = (client) => {
        setSelectedClient(client);
        setWorkout(client.workoutPlan);
        setDietImage(null);
        setPreviewUrl(client.imageUrl);
    };

    const handleStatusEdit = (client) => {
        setEditStatusClient(client);
        setStatus(client.status);
    };

    const handleDietImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setDietImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpdate = async () => {
        if (!dietImage) {
            alert('Please upload a diet plan image.');
            return;
        }

        const formData = new FormData();
        formData.append('workoutPlan', workout);
        formData.append('dietImage', dietImage);

        try {
            const response = await fetch(`http://localhost:8080/api/registration/${selectedClient.id}`, {
                method: 'PUT',
                body: formData,
            });
            const updatedClient = await response.json();
            setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
            alert('Workout and Diet Plan Updated!');
            handleClose();
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    const handleStatusUpdate = async () => {
        try {
            const updatedClientData = {
                ...editStatusClient, // Copy all existing fields
                status, // Update only the status
            };
    
            const response = await fetch(`http://localhost:8080/api/registration/${editStatusClient.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedClientData),
            });
    
            const updatedClient = await response.json();
            setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
            setEditStatusClient(null);
            setStatus('');
            fetchActiveUserCount(); // Update the active user count
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    

    const handleRemoveClient = async (clientId) => {
        try {
            await fetch(`http://localhost:8080/api/registration/${clientId}`, {
                method: 'DELETE',
            });
            setClients(clients.filter(client => client.id !== clientId));
            setTotalUsers(clients.length - 1);
            fetchActiveUserCount(); // Update the active user count
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    const handleClose = () => {
        setSelectedClient(null);
        setWorkout('');
        setDietImage(null);
        setPreviewUrl('');
    };

    return (
        <div className="admin-container">
            <nav className="navbar1">
                <div className="logo2">Onefit Admin</div>
                <ul className="nav-links">
                    <li><a href="upplan">Premium plans</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </nav>

            <div className="stats-container">
                <div className="stat-box">
                    <h3>Total Users</h3>
                    <p>{totalUsers}</p>
                </div>
                <div className="stat-box">
                    <h3>Active Users</h3>
                    <p>{activeUsers}</p>
                </div>
            </div>
{/**normal list */}
            <div className="content">
                <div className="client-list">
                    <h2>Clients</h2>
                    <table className="client-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th name='full_name'>Name</th>
                                <th name='email_id'>Email</th>
                                <th className='contact_number'>Contact</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={client.id}>
                                    <td>{index + 1}</td>
                                    <td>{client.full_name}</td>
                                    <td>{client.email_id}</td>
                                    <td>{client.contact_number}</td>
                                    <td>{client.status}</td>
                                    <td>
                                        {/*<button className="select-button" onClick={() => handleClientSelect(client)}>Select</button>*/}
                                        <button className="edit-button" onClick={() => handleStatusEdit(client)}>Edit Status</button>
                                        <button className="remove-button" onClick={() => handleRemoveClient(client.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedClient && (
                    <div className="client-details">
                        <h2>{selectedClient.full_name}</h2>
                        <div>
                            <label>Workout Plan:</label>
                            <input 
                                type="text" 
                                value={workout} 
                                onChange={(e) => setWorkout(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Upload Diet Plan Image:</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleDietImageChange} 
                            />
                        </div>
                        {previewUrl && (
                            <div className="preview-container">
                                <h3>Preview</h3>
                                <div className="preview">
                                    <img src={previewUrl} alt="Diet Plan Preview" />
                                </div>
                            </div>
                        )}
                        <button onClick={handleUpdate} className="update-button">Update Plans</button>
                        <button onClick={handleClose} className="close-button">Close</button>
                    </div>
                )}

                {editStatusClient && (
                    <div className="status-edit-container">
                        <h2>Edit Status for {editStatusClient.full_name}</h2>
                        <div>
                            <label>Status:</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <button onClick={handleStatusUpdate} className="update-button">Update Status</button>
                        <button onClick={() => setEditStatusClient(null)} className="close-button">Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminLandingPage;
