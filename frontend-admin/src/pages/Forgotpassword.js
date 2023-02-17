import React from 'react';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
      <div className="py-5 mt-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center mb-3">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered email address
        </p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <button
            className="border-0 rounded-3 px-3 py-2 w-100 text-white fw-bold"
            type="submit"
            style={{ background: '#ffd333' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
