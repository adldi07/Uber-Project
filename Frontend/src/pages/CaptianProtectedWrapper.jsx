import React, { useContext, useEffect,useState } from 'react';
import { CaptianDataContext } from '../contexts/captianContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function CaptianProtectedWrapper({children}){
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    const { captian , setCaptian } = useContext(CaptianDataContext);
    const [isLoading , setIsLoading ] = useState(true);

    useEffect(()=>{
        if(!token){
            navigate('/captian-login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captian/profile`,{
            headers:{
                authorization:`Bearer ${token}`
            }
            
        }).then((response)=>{
            // console.log(response.headers);
            if(response.status===200){
                setCaptian(response.data.captian);
                setIsLoading(false);
            }
        }).catch(err=>{
            console.log(headers);
    
            console.log("error")
            console.log(err);
            localStorage.removeItem('token');
            navigate('/captian-login');
        });
    
    } , [ token ] );

    
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )

}