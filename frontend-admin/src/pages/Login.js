import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div
      className="py-5 px-2 "
      style={{ background: '#ffd333', minHeight: '100vh' }}
    >
      <div
        className="py-5 mt-5  bg-white rounded-3 mx-auto p-3 "
        style={{ maxWidth: '400px' }}
      >
        <h3 className="text-center mb-3">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />

          <Link
            to="/admin"
            className="border-0 rounded-3 px-3 py-2 w-100 text-white fw-bold text-center text-decoration-none fs-5"
            type="submit"
            style={{ background: '#ffd333' }}
          >
            Submit
          </Link>
          <div className="mt-3 ">
            <Link
              to="forgot-password "
              className="text-decoration-none d-flex justify-content-center text-black"
            >
              Forgot password? Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
