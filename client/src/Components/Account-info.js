import './style/Account-info.css';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';


const AccountInfo = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const rewards = localStorage.getItem('rewrds');




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
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Logout</Link>
            </button>
        </div>
    );
};

export default AccountInfo;
