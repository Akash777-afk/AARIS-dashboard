import { useCallback, useState } from 'react';
import type { FunctionComponent } from 'react';
import styles from './LoginPage.module.css';

type LoginPageProps = {
  onLogin: () => void;
};

const LoginPage: FunctionComponent<LoginPageProps> = ({ onLogin }) => {  
  const [email,] = useState('');
  const [password, setPassword] = useState('');

  const onRectangleClick = useCallback(() => {
  if (!email || !password) {
    alert('Please enter email and password');
    return;
  }

  onLogin();
}, [email, password, onLogin]);
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

        				</div>
        				<div className={styles.welcomeBackContainer}>
          					<span>{`Welcome `}</span>
          					<span className={styles.back}>back !</span>
        				</div>
        				<div className={styles.groupInner} />
        				<div className={styles.rememberMe}>Remember me</div>
        				<div className={styles.toAarisDashboard}>to AARIS dashboard</div>
        				<div className={styles.forgotPassword}>Forgot password ?</div>
          					<div className={styles.passwordWrapper}>
            						<div className={styles.emailAddress}>Password</div>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.rectangleDiv} onClick={onRectangleClick} />
            						<div className={styles.signIn}>Sign in</div>
          					</div>
          					<div className={styles.orContinueWith}>Or continue with</div>
          					<div className={styles.rectangleContainer}>
            						<div className={styles.groupChild2} />
            						<div className={styles.googleAccount}>Google account</div>
            						<img className={styles.devicongoogle} src="/devicon_google.svg" alt="" />
          					</div>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupChild3} />
            						<div className={styles.iosAccount}>ios account</div>
            						<img className={styles.icoutlineAppleIcon} src="/ic_outline-apple.svg" alt="" />
          					</div>
          					 <div className={styles.groupWrapper}>
                     <div className={styles.rectangleParent2}>
                     <div className={styles.groupChild4} />
                     <div className={styles.enterYourEmail}>
                     Enter your Email Address
                     </div>
                     <img className={styles.lineMdemailIcon} src="/line-md_email.svg" alt="" />
                     </div>
                    </div>
          					<div className={styles.groupContainer}>
                    <div className={styles.rectangleParent2}>
                    <img
                       className={styles.uillockIcon}
                       src="/uil_lock.svg"
                       alt=""/>
                    <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
                    <img className={styles.iconamooneye} src="/iconamoon_eye.svg" alt=""/>
                     </div>
                    </div>
          					</div>
          					</div>);
        				};
        				
        				export default LoginPage ;
        				