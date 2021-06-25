import React from "react";
import "../login.css";
function LoginPage() {
    
  return (
    <div class="login">
      <div class="left">
        <h3>Hey there!</h3>
        <p>
          Welcome to the executive login page. To start accessing your leads &
          more, Login now!
        </p>
        <form action="" class="login-form">
          <label>
            <input type="text" placeholder="Enter your Name" />
          </label>
          <label>
            <input type="email" placeholder="Enter your email address" />
          </label>
          <label>
            <input type="password" placeholder="Enter Password" />
          </label>
          <div class="left-footer">
            <a href="#" class="sign">
              Forgot Password?
            </a>
          </div>
          
          <button type="submit" class="login-btn">
            Continue
          </button>
        </form>
        <p class="footer-tc">
          By clicking continue, you are agreeing to our privacy policy & terms
          of use. For more information Terms & Conditions.
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
