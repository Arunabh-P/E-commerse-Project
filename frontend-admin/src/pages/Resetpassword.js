import React from 'react';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
  return (
    <div
      className="py-5 px-2"
      style={{ background: '#ffd333', minHeight: '100vh' }}
    >
      <div
        className="py-5 mt-5  bg-white rounded-3 mx-auto p-3"
        style={{ maxWidth: '400px' }}
      >
        <h3 className="text-center mb-3">Reset Password</h3>
        <p className="text-center">Please enter new password</p>
        <form action="">
          <CustomInput type="password" label="New password" id="pass" />
          <CustomInput
            type="password"
            label="Confirm password"
            id="confirmpass"
          />

          <button
            className="border-0 rounded-3 px-3 py-2 w-100 text-white fw-bold"
            type="submit"
            style={{ background: '#ffd333' }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
