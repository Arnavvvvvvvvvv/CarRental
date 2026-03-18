import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { data, useNavigate } from "react-router-dom";

axios.defaults.baseURL= import.meta.env.VITE_BASE_URL

export const AppContext= createContext();
export const AppProvider= ({children})=>{

    const navigate= useNavigate();
    const currency= import.meta.env.VITE_CURRENCY 
    const [token, setToken]= useState(null);
    const [user, setUser]= useState(null);
    const [isOwner, setIsOwner]= useState(false);
    const [showLogin, setShowLogin]= useState(false);
    const [pickupDate, setPickupDate]= useState('');
    const [returnDate, setReturnDate]= useState('');

    const [cars, setCars]= useState([]);

    // function to check if user is logged in
    const fetchUser= async()=>{
        try {
            const {data}= await axios.get('/api/users/data');
            if(data.success){
                setUser(data.user);
                setIsOwner(data.user.role === 'owner');
            }else{
                navigate('/');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // function to fetch all cars for user
    const fetchCars= async()=>{
        try {
            const {data}= await axios.get('/api/users/cars');
            data.success ? setCars(data.cars) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    // function to logout user
    const logout= ()=>{
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setIsOwner(false);
        axios.defaults.headers.common['Authorization']= '';
        toast.success('Logged out successfully');
    }


    //page load hone par agar user already logged in hai to uska token localStorage se lo 
    useEffect(()=>{
        const token= localStorage.getItem('token');
        setToken(token);
        fetchCars();
    }, [])

    //useEffect to fetch user data when token is changed
    useEffect(()=>{
        if(token){
            axios.defaults.headers.common['Authorization']= `${token}`
            fetchUser();
        }
    }, [token])
    

    const value= {
        //Ye sab values poori app me accessible hongi.
        navigate, currency, axios, user, setUser,
        token, setToken, isOwner, setIsOwner, showLogin, setShowLogin, 
        fetchUser, fetchCars, pickupDate, setPickupDate, 
        returnDate, setReturnDate, cars, setCars, logout
    }

    return ( 
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext= () => {
    return useContext(AppContext);
}