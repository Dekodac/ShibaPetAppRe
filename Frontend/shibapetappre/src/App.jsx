import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {  Outlet } from 'react-router-dom';
import { LoginContext } from './components/LoginContext';
import axios from 'axios';

export default function App() {
  
const [loginStatus, setLoginStatus] = useState(null);
const [errorMessage, setErrorMessage] = useState('');
const [email, setEmail] = useState('');
const [passw, setpassw] = useState('');
const navigate = useNavigate();
const location = useLocation();
const lastVisited = useRef();
const [user, setUser] = useState(null);

const whoAmI = async () => {
  // Check if a token is stored in the localStorage
  let token = localStorage.getItem("token");
  if (token) {
    // If the token exists, set it in the API headers for authentication
    // api.defaults.headers.common["Authorization"] = `Token ${token}`;
    // Fetch the user data from the server using the API
    let response = await axios.get('http://127.0.0.1:8000/account/details/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log(response)
    // Check if the response contains the user data (email field exists)
    if (response.data.email) {
      // Set the user data in the context or state (assuming `setUser` is a state update function)
      setUser(response.data);
      // If the user is authenticated and there is a stored lastVisited page,
      // navigate to the lastVisited page; otherwise, navigate to the default homepage "/home"
      // if (lastVisited.current) {
      //   navigate(lastVisited.current);
      // } else {
      //   navigate("/home");
      // }
      navigate("/")
    }
  } else {
    // If no token is found, navigate to the home page
    navigate("/");
  }
};

useEffect(() => {
  whoAmI();
}, []);

useEffect(() => {
  if (!user) {
    // If the user is not authenticated, update the lastVisited ref with the current location pathname
    lastVisited.current = location.pathname;
  }
}, [location]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };
    
  const handlePasswChange = (e) => {
  setpassw(e.target.value);
  };
  
  const handleLogInSubmit = async (e) => {
      e.preventDefault();
      setEmail("");
      setpassw("");
      
      try {
          const userData = {
              email: email,
              password: passw,
          };
          
          const response = await axios.post('http://127.0.0.1:8000/login/', userData);
          
          if (response.data.email) {
            localStorage.setItem("token", response.data.token);
              // Login success
              setLoginStatus('success');
              
          } else {
              // Login failed
              setLoginStatus('error');
              setErrorMessage('Invalid email or password');
              alert("Invalid email or password.")
          }
      } catch (error) {
          // Handle request error
          setLoginStatus('error');
          setErrorMessage('An error occurred while logging in');
          console.error('Login failed:', error);
          alert(errorMessage)
      }
  };

  return (
    <>
    <LoginContext.Provider value={{loginStatus,setLoginStatus,handleLogInSubmit,handlePasswChange,handleEmailChange,email,passw}}>
      <Outlet />
    </LoginContext.Provider>
    </>
  );
}