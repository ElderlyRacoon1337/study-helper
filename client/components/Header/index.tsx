import { useState } from 'react';
import Auth from '../Auth';
import styles from './Header.module.scss';
import Link from 'next/link';
import Navigation from '../Navigation';

const Header = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.headerFlex}>
          <Link href="/">
            <div className={styles.logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1>
                <span>S</span>tudy <span>H</span>elper
              </h1>
            </div>
          </Link>
          <div className={styles.rightSide}>
            <button className="buttonText">About us</button>
            <button
              onClick={() => {
                setIsSignUp(true);
                setIsAuthDialogOpen(true);
              }}
              className="buttonOutlined"
            >
              Sign up
            </button>
            <button
              onClick={() => {
                setIsSignUp(false);
                setIsAuthDialogOpen(true);
              }}
              className="buttonOutlined"
            >
              Sign in
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="iconButtonText"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div onClick={() => setIsMenuOpen(false)} className="popup">
                <Navigation />
              </div>
            )}
          </div>
        </div>
      </div>
      {isAuthDialogOpen && (
        <div onClick={() => setIsAuthDialogOpen(false)} className="popup">
          <div onClick={(e) => e.stopPropagation()} className="popupElement">
            <Auth
              isSignUp={isSignUp}
              setIsSignUp={setIsSignUp}
              setIsAuthDialogOpen={setIsAuthDialogOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
