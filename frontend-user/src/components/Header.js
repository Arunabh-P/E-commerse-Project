import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over 1000 & Free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :{' '}
                <a href="tel:+91 8714368699" className="text-white">
                  +91 8714368699
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
