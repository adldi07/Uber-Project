import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export function CaptianLogout(){

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_API_URL}/captian/logout`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captian-login')
        }
    })

    return (
        <div>CaptianLogout</div>
    )
}