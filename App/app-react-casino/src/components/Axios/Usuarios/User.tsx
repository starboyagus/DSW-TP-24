import axios from 'axios'
import { useEffect, useState } from 'react';
import './User.css';



export function User() {

    const [user, setUser] = useState([])
    const GetUser = () => {
    axios.get("http://localhost:3000/api/v1/users").then((response) =>
        setUser(response.data)
    )}

   useEffect(() => {
        GetUser();
    });

    return (
        <div className="list-main">
            <div className='title-'>
                <h2 className='title-user'>User management</h2>
            </div>
            <div className="header-name">
                <div className="header-column">ID</div>
                <div className="header-column">Username</div>
                <div className="header-column">Role</div>
                <div className="header-column">Email</div>
                <div className="header-column">Balance</div>
                <div className="header-column">Actions</div>
            </div>
            <ul className='list'>
                {user.map((item) => (
                    <li className='items' key={item.id_user}>
                        <div className="user-info">
                            <div className="column">{item.id_user}</div>
                            <div className="column">{item.username}</div>
                            <div className="column">{item.role}</div>
                            <div className="column">{item.email}</div>
                            <div className="column">{item.balance}</div>
                        </div>
                        <div className="actions">
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}