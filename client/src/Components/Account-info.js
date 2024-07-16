import React, { useState, useEffect } from 'react';
import './style/Account-info.css';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
// import axios from 'axios';

const AccountInfo = () => {
    const [rewardPoints, setRewardPoints] = useState(0);
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    // localStorage.clear();

    // Assuming you fetch reward points from an API
    useEffect(() => {
        // Replace with actual API call
        // axios.get('/rewardPoints')
        //     .then(response => {
        //         setRewardPoints(response.data.points);
        //     });
        setRewardPoints(150); // Placeholder for reward points
    }, []);

    return (
        <div className="dashboard">
            <h2>User Dashboard</h2>
            <img src={user} alt="user" />
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Reward Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{email}</td>
                        <td>{name}</td>
                        <td>{rewardPoints}</td>
                    </tr>
                </tbody>
            </table>
            <button>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Logout</Link>
            </button>
        </div>
    );
};

export default AccountInfo;
