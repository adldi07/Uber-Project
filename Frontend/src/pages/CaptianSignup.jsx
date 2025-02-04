import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { CaptianDataContext } from "../contexts/captianContext";
import  { useNavigate } from 'react-router-dom'
import axios from "axios";

function CaptianSignup(){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')

    // const [ captianData, setCaptianData ] = useState({})
    const { captian , setCaptian } = useContext(CaptianDataContext);
    const navigate = useNavigate();

    const submitHandler = async(e)=>{
        e.preventDefault()
        const captianData = {
            captianName:{
                firstName:firstName,
                lastName:lastName,
            },
            email:email,    
            password: password,
            vehicle: {
              color: vehicleColor,
              plate: vehiclePlate,
              capacity: vehicleCapacity,
              vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captian/register`, captianData);

        if(response.status === 201){
          const data = response.data;
          // console.log(data);
          setCaptian(data.captian)
          // console.log(captian)
          localStorage.setItem('token',data.token);
          navigate('/captian-home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        // console.log(captianData);
    }

    return (
        <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
              <img className='w-16 mb-10' src="data:image/png;base64,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" alt="" />
    
              <form onSubmit={(e) => {
                submitHandler(e)
              }}>
    
                <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4 mb-7'>
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='First name'
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                  />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='Last name'
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                    }}
                  />
                </div>
    
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                  type="email"
                  placeholder='email@example.com'
                />
    
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    
                <input
                  className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required type="password"
                  placeholder='password'
                />

                <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-7'>
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                    type="text"
                    placeholder='Vehicle Color'
                    value={vehicleColor}
                    onChange={(e) => {
                      setVehicleColor(e.target.value)
                    }}
                  />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                    type="text"
                    placeholder='Vehicle Plate'
                    value={vehiclePlate}
                    onChange={(e) => {
                      setVehiclePlate(e.target.value)
                    }}
                  />
                </div>
                <div className='flex gap-4 mb-7'>
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                    type="number"
                    placeholder='Vehicle Capacity'
                    value={vehicleCapacity}
                    onChange={(e) => {
                      setVehicleCapacity(e.target.value)
                    }}
                  />
                  <select
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                    value={vehicleType}
                    onChange={(e) => {
                      setVehicleType(e.target.value)
                    }}
                  >
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                  </select>
                </div>
          
                <button
                  className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                >Create Captian account</button>
    
              </form>
              <p className='text-center'>Already have a account? <Link to='/captian-login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
              <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
          </div>
        </div >
      )
}

export default CaptianSignup;