import React, { useState } from 'react';
import AuthForm from '../Components/AuthForm.jsx';

export default function Register() {
  const [formType, setFormType] = useState('login');

  return (
    <div>
      <div className="p-6 max-w-md mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${formType === 'login' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}
            onClick={() => setFormType('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${formType === 'signup' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}
            onClick={() => setFormType('signup')}
          >
            Signup
          </button>
        </div>
        <AuthForm type={formType} />
      </div>
    </div>
  );
}