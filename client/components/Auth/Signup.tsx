import React from 'react';
import styles from './Auth.module.scss';

interface SignupProps {
  setIsAuthDialogOpen: (arg0: boolean) => void;
  setIsSignUp: (arg0: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({
  setIsAuthDialogOpen,
  setIsSignUp,
}) => {
  return (
    <>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Sign up</h2>
        <svg
          onClick={() => setIsAuthDialogOpen(false)}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className={styles.name}>
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Surname" className="input" />
      </div>
      <input type="text" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="button">Continue</button>
      <div className={styles.formBottom}>
        <div className={styles.icons}>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="GoogleIcon"
          >
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
          </svg>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="GitHubIcon"
          >
            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
          </svg>
        </div>
        <p onClick={() => setIsSignUp(false)} className={styles.allready}>
          Allready have an account?
        </p>
      </div>
    </>
  );
};

export default Signup;
