import { useCallback } from 'react';
import type { FunctionComponent } from 'react';
import styles from './LoginPage.module.css';

type LoginPageProps = {
  onLogin: () => void;
};

const LoginPage: FunctionComponent<LoginPageProps> = ({ onLogin }) => {  
  const onRectangleClick = useCallback(() => {
  alert("Sign In button clicked!");
  onLogin();
}, [onLogin]);
  return (
    <div className={styles.loginPage}>
      <img
        className={styles.greenMinimalistOliveOilOrg}
        src="/bgimage.png"
        alt=""
      />

      <img
        className={styles.loginPageChild}
        src="/ic_outline-apple.svg.png"
        alt=""
      />

      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />

          <div
            className={styles.rectangleDiv}
            onClick={onRectangleClick}
          />

          <div className={styles.lineDiv} />

          <div className={styles.emailAddress}>
            Email Address
          </div>

          <div className={styles.welcomeBackContainer}>
            <span>Welcome </span>
            <span className={styles.back}>back !</span>
          </div>

          <div className={styles.groupChild2} />

          <div className={styles.rememberMe}>
            Remember me
          </div>

          <div className={styles.toAarisDashboard}>
            to AARIS dashboard
          </div>

          <div className={styles.googleAccount}>
            Google account
          </div>

          <div className={styles.iosAccount}>
            ios account
          </div>

          <div className={styles.forgotPassword}>
            Forgot password ?
          </div>

          <div className={styles.password}>
            Password
          </div>

          <div className={styles.signIn}>
            Sign in
          </div>

          <div className={styles.orContinueWith}>
            Or continue with
          </div>

          <img
            className={styles.devicongoogle}
            src="/devicon_google.svg"
            alt=""
          />

          <img
            className={styles.icoutlineAppleIcon}
            src="/ic_outline-apple.svg"
            alt=""
          />
        </div>

        {/* EMAIL FIELD */}
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />

          <img
            className={styles.lineMdemailIcon}
            src="/line-md_email.svg"
            alt=""
          />

          <input
            type="email"
            placeholder="Enter your Email Address"
            className={styles.emailInput}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.rectangleContainer}>
          <div className={styles.instanceChild} />

          <img
            className={styles.uillockIcon}
            src="/uil_lock.svg"
            alt=""
          />

          <input
            type="password"
            placeholder="Enter your Password"
            className={styles.passwordInput}
          />

          <img
            className={styles.iconamooneye}
            src="/iconamoon_eye.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;