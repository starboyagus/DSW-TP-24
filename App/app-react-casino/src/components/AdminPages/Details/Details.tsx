import axios from 'axios';
import './Details.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import { defaultScroll } from "../../../libs/globalFunctions.tsx";

interface UserType {
    role: string;
}

export function Details({role}:UserType) {
    defaultScroll()

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [balance, setBalance] = useState(0)
    const [country, setCountry] = useState("")
    const {id} = useParams();

    const token = localStorage.getItem('jwt-token');

    const GetData = () => {
        axios.get(`http://localhost:3000/api/v1/users/read/${id}`, { params: { token, role } }).then((response) => {
            setUsername(response.data[0].username)
            setEmail(response.data[0].email)
            setFirstName(response.data[0].first_name)
            setLastName(response.data[0].last_name)
            setBirthday(response.data[0].birthday)
            setPhone(response.data[0].phone)
            setBalance(response.data[0].balance)
            setCountry(response.data[0].Country)
            console.log(response.data[0])
        });
    };

    useEffect(() => {
        GetData();
    }, []);

    function back() {
        navigate("/userlist")
    }

    return (
        
        <>
            <div className='details'>
                <p className='detail_element'>ID User: {id}</p>
                <p className='detail_element'>Username: {username}</p>
                <p className='detail_element'>Email: {email}</p>
                <p className='detail_element'>First Name: {firstName}</p>
                <p className='detail_element'>Last Name: {lastName}</p>
                <p className='detail_element'>Birthday: {birthday}</p>
                <p className='detail_element'>Phone: {phone}</p>
                <p className='detail_element'>Balance: {balance}</p>
                <p className='detail_element'>Country: {country}</p>
                <button type='button' className='backDetails' onClick={back}>Back</button>
            </div>
        </>

    );
}