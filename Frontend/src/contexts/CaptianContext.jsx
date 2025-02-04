import React , {createContext, useContext, useState} from 'react'

export const CaptianDataContext = createContext();


const CaptianContext = ({children})=>{
    const [captian ,setCaptian ] = useState(null);
    const [isLoading , setIsLoading ] = useState(false);
    const [error , setError ] = useState(null);

    const updateCaptian = (captianData) =>{
        setCaptian(captianData);
    }

    const value = {
        captian , 
        setCaptian,
        isLoading,
        setIsLoading,
        error,
        setError, 
        updateCaptian
    };

    return (
        <CaptianDataContext.Provider value={value}>
            {children}
        </CaptianDataContext.Provider>
    );
}

export default CaptianContext;