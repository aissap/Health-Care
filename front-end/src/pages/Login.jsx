import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle authentication logic here
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form 
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-md"
        onSubmit={onSubmitHandler}
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please {state === 'Sign Up' ? 'create an account' : 'log in'} to book an appointment.
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-primary"
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-primary"
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-primary"
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-all"
        >
          {state}
        </button>

        <p className="text-center mt-4 text-gray-600">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}  
          <span 
            className="text-primary font-medium cursor-pointer ml-1"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Log in' : 'Sign up'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
