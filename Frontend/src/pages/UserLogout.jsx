// import React from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';



// const UserLogout = ()=>{

//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();

//     axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     }).then((response)=>{
//         console.log(response);  
//         if(response.status === 400){
//             localStorage.removeItem('token')
//             navigate('/login')
//         }
//     });

//     return (
//         <div>UserLogout</div>
//     )
// }

// export default UserLogout;

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log(import.meta.env.VITE_BASE_URL);
    console.log(import.meta.env.VITE_API_URL);

    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout