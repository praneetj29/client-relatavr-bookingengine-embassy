import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import Alert from "@material-ui/lab/Alert";

const OtpLogin = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  return (
    <div className="login-page">
      <div className="login">
        <div className="left">
          <h3>Hey there!</h3>
          <p>
            Welcome to the executive login page. To start accessing your leads &
            more, Login now!
          </p>
          {errors.password && (
            <Alert severity="error">
              Invalid Credentials. Your access has been revoked. Kindly contact
              admin.
            </Alert>
          )}
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label>
              <input
                autoComplete="off"
                className={`input ${errors.email && "is-danger-input"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
                placeholder="Enter your email address"
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </label>
            <label>
              <input
                className={`input ${errors.otp && "is-danger-input"}`}
                type="number"
                name="otp"
                onChange={handleChange}
                value={values.otp || ""}
                require
                placeholder="Enter OTP"
              />
            </label>
            {errors.otp && <p className="help is-danger">{errors.otp}</p>}
            <div className="left-footer">
              <a href="#" className="sign">
                Resend OTP
              </a>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="left-footer redirect-link">
              <a href="#">LOGIN USING PASSWORD</a>
            </div>
          </form>

          <p className="footer-tc">
            By clicking continue, you are agreeing to our privacy policy & terms
            of use. For more information Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
