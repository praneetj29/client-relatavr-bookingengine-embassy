import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import Alert from '@material-ui/lab/Alert';
const SkipLogin = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="login">
      <div className="left">
        <h3>Hey there!</h3>
        <p>
          Welcome to the executive login page. To start accessing your leads &
          more, Login now!
        </p>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label>
            <input autoComplete="off" className={`input ${errors.name && 'is-danger-input'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required placeholder="Enter your Name address" />
            {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
            )}
          </label>
          <label>
            <input autoComplete="off" className={`input ${errors.email && 'is-danger-input'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required placeholder="Enter your email address" />
            {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
            )}
          </label>
          <label>
            <input className={`input ${errors.phone && 'is-danger-input'}`} type="number" name="phone" onChange={handleChange} value={values.Phone || ''} require placeholder="Enter Phone" />
          </label>
          {errors.phone && (
                  <p className="help is-danger">{errors.phone}</p>
          )}
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

export default SkipLogin;