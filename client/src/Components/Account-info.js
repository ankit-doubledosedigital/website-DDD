import './style/Account-info.css';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import axios from 'axios';

const AccountInfo = () => {
    const [rewards, setRewards] = useState('');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');

    const clearCacheLogout = () => {
        // Clear local storage
        localStorage.clear();

        // Clear session storage
        sessionStorage.clear();
    };

    

    // useEffect(() => {
        axios.get('http://localhost:8080/login/getData', {
            params: { userId }
        })
        .then(response => {
            setRewards(response.data.user.rewards);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    // }, [userId]); // The effect runs when the component mounts and when userId changes

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
                        <td>{rewards}</td>
                    </tr>
                </tbody>
            </table>
            <button>
                <Link to="/" onClick={clearCacheLogout} style={{ color: 'inherit', textDecoration: 'none' }}>Logout</Link>
            </button>
        </div>
    );
};

export default AccountInfo;
