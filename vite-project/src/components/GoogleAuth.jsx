import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response) => {
    const { credential } = response;
    try {
      const res = await axios.post('http://localhost:5050/api/signup', {
        token: credential,
      });

      console.log('API response:', res.data);

      // If the API call is successful, navigate to the home page
      if (res.data) {
        alert("Signup successful");
        navigate('/home');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.log('Error during Google Sign-In:', error);
      alert('An error occurred while signing up with Google');
    }
  };

  const handleGoogleFailure = (error) => {
    console.log('Google Sign-In error:', error);
    alert('Google Sign-In failed');
  };

  return (
    <GoogleOAuthProvider clientId="882706344649-q0kqn6u2ao3ang9ng0m983g0nkri9d32.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth; 