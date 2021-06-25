import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import Alert from '@material-ui/lab/Alert';
// import ReactPhoneInput from 'react-phone-input';
const ValidationForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

//   function handleOnChangeCountry(value) {
//     this.setState({
//        phone: value
//     });
//  }

  return (
    <div className="login">
      <div className="left">
        <h3>Hey there!</h3>
        <p>
          Welcome to the executive login page. To start accessing your leads &
          more, Login now!
        </p>
        {errors.password && (
        <Alert severity="error">Invalid Credentials. Your access has been revoked. Kindly contact admin.</Alert>
        )}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          
          <label>
            <input autoComplete="off" className={`input ${errors.email && 'is-danger-input'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required placeholder="Enter your email address" />
            {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
            )}
          </label>
          <label>
            <input className={`input ${errors.password && 'is-danger-input'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} require placeholder="Enter Password" />
          </label>
          {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
          )}
          <div className="left-footer">
            <a href="#" className="sign">
              Forgot Password?
            </a>
          </div>
          {/* <ReactPhoneInput defaultCountry={'us'} onChange={handleOnChangeCountry}/> */}
          <button type="submit" className="login-btn">
            Continue
          </button>
        </form>
        <p className="footer-tc">
          By clicking continue, you are agreeing to our privacy policy & terms
          of use. For more information Terms & Conditions.
        </p>
      </div>
    </div>
  );
};

export default ValidationForm;