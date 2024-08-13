import React, { useState, useEffect } from 'react';
import './premiumplan.css';

const PremiumPlansPage = () => {
    // State to hold the list of premium plans
    const [premiumPlans, setPremiumPlans] = useState([]);
    
    // State to manage the currently selected plan for editing
    const [selectedPlan, setSelectedPlan] = useState(null);
    
    // State to manage form inputs for plan details
    const [planName, setPlanName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    // State to toggle between adding and editing a plan
    const [isEditing, setIsEditing] = useState(false);

    // Fetch premium plans from the API when the component mounts
    useEffect(() => {
        fetchPremiumPlans();
    }, []);

    // Function to fetch the list of premium plans from the API
    const fetchPremiumPlans = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/premium-plans');
            const data = await response.json();
            setPremiumPlans(data);
        } catch (error) {
            console.error('Error fetching premium plans:', error);
        }
    };

    // Function to handle the selection of a plan for editing
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setPlanName(plan.planName);
        setDescription(plan.description);
        setPrice(plan.price);
        setIsEditing(true);
    };

    // Function to handle adding or updating a plan
    const handleAddOrUpdatePlan = async () => {
        const planData = { planName, description, price };

        try {
            if (isEditing) {
                // Update an existing plan
                await fetch(`http://localhost:8080/api/premium-plans/${selectedPlan.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(planData),
                });
                alert('Plan updated successfully!');
            } else {
                // Add a new plan
                await fetch('http://localhost:8080/api/premium-plans', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(planData),
                });
                alert('Plan added successfully!');
            }

            // Clear form inputs and reset editing state
            setPlanName('');
            setDescription('');
            setPrice('');
            setIsEditing(false);
            setSelectedPlan(null);

            // Fetch the updated list of premium plans
            fetchPremiumPlans();
        } catch (error) {
            console.error('Error saving the premium plan:', error);
        }
    };

    // Function to handle deleting a plan
    const handleDeletePlan = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/premium-plans/${id}`, {
                method: 'DELETE',
            });
            alert('Plan deleted successfully!');
            fetchPremiumPlans();
        } catch (error) {
            console.error('Error deleting the premium plan:', error);
        }
    };

    return (
        <div className="premium-plans-container">
            {/* Back button */}
            <a href="/thome1" className="back-button">Back</a>
            
            <h1>Premium Plans</h1>
            
            <div className="form-container">
                <h2>{isEditing ? 'Edit Plan' : 'Add New Plan'}</h2>
                
                {/* Form for adding or editing a premium plan */}
                <input
                    type="text"
                    className='ppt'
                    placeholder="Plan Name"
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className='ppt'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    type="text"
                    className='ppt'
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button className="og1" onClick={handleAddOrUpdatePlan}>
                    {isEditing ? 'Update Plan' : 'Add Plan'}
                </button>
            </div>
            
            <div className="plans-list-container">
                <h2>Existing Plans</h2>
                
                {/* Table to display existing premium plans */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {premiumPlans.map((plan) => (
                            <tr key={plan.id}>
                                <td>{plan.planName}</td>
                                <td>{plan.description}</td>
                                <td>{plan.price}</td>
                                <td>
                                    {/* Edit and delete buttons for each plan */}
                                    <button className="edit-button" onClick={() => handlePlanSelect(plan)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDeletePlan(plan.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PremiumPlansPage;
