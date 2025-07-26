import React from 'react';

export default function AuthForm({ type }) {
  return (
    <form className="bg-white p-6 rounded shadow space-y-4">
      {type === 'signup' && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
}
