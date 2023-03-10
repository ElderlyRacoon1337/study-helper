import React, { useState } from 'react';
import styles from './Auth.module.scss';
import Signin from './Signin';
import Signup from './Signup';

interface AuthProps {
  setIsAuthDialogOpen: (arg0: boolean) => void;
  isSignUp: boolean;
  setIsSignUp: (arg0: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({
  setIsAuthDialogOpen,
  isSignUp,
  setIsSignUp,
}) => {
  return (
    <div className={styles.form}>
      {isSignUp ? (
        <Signup
          setIsSignUp={setIsSignUp}
          setIsAuthDialogOpen={setIsAuthDialogOpen}
        />
      ) : (
        <Signin
          setIsSignUp={setIsSignUp}
          setIsAuthDialogOpen={setIsAuthDialogOpen}
        />
      )}
    </div>
  );
};

export default Auth;
