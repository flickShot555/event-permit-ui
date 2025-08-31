import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, DotSquare } from "lucide-react";
import "./Login.css"; // 👈 import external CSS
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const loginEmailRef = useRef(null);
  const animationDuration = 500; // match CSS transition duration (ms)

  // blur active element after toggle to prevent offscreen focus
  useEffect(() => {
    if (document.activeElement && !document.activeElement.closest?.('.login-form')) {
      document.activeElement.blur();
    }
  }, [isLogin]);

  // inside your component (after state declarations)

  const sliderRef = React.useRef(null);


  React.useEffect(() => {
    // after switching, blur any focused element that might be off-screen
    if (document.activeElement && !document.activeElement.closest?.('.login-form')) {
      document.activeElement.blur();
    }
  }, [isLogin]);

  const toggleForm = () => setIsLogin(!isLogin);

  async function handleSignupSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    /**
        const firstName= formData.get("firstName");
        const lastName= formData.get("lastName");
        const email= formData.get("email");
        const password= formData.get("password");
        const confirmpassword= formData.get("confirmpassword");
    */
    //const password = Document.getElement
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmpassword: formData.get("confirmpassword"),
    };

    if(password === confirmpassword){

        try {
          // example API call (replace URL + options)
          const resp = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
    
          if (!resp.ok) {
            const err = await resp.json().catch(()=>({message: 'Signup failed'}));
            throw new Error(err.message || resp.statusText);
          }
    
          // success: switch to login panel
          setMessage("Account created successfully. Redirecting to login...");
          setIsLogin(true);
    
          // wait for the slide animation to finish, then focus email input in login
          setTimeout(() => {
            loginEmailRef.current?.focus?.();
          }, animationDuration + 50);
        } catch (err) {
          setMessage(err.message || "Signup failed");
        } finally {
          setLoading(false);
        }
    }else{
        message("passwords do not match!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="login-image">
          <img
            src=".././images/hero.jpeg"
            alt="Auth background"
          />
          <div className="overlay" />
        </div>

        {/* Right Side - Forms */}
        {/* Right Side - Forms */}
        <div className="login-form" style={{ position: "relative" }}>
        {/* Back link/button sits on top-left of the whole page */}
            <Link to="/" className="back-btn" aria-label="Back to landing page">← Back</Link>

            <div className={`form-slider ${isLogin ? "show-login" : "show-signup"}`}>
                {/* Login Form */}
                <div
                className={`form-panel ${isLogin ? "" : "panel-inactive"}`}
                aria-hidden={!isLogin}
                >
                <h1 className="form-title">Welcome back</h1>
                <p className="form-subtitle">Please sign in to your account</p>
                <form className="form-fields">
                    {/* Email */}
                    <div className="form-group">
                    <label>Email</label>
                    <div className="input-wrapper">
                        {/*<Mail className="icon" />*/}
                        <input
                            name="loginEmail"
                            ref={loginEmailRef}
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    </div>

                    {/* Password */}
                    <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        {/**<Lock className="icon" /> */}
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        />
                        <button
                        type="button"
                        className="toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    </div>

                    {/* Options */}
                    <div className="form-options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <button type="button" className="link-btn">
                        Forgot password?
                    </button>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="submit-btn">
                    Sign in <ArrowRight size={18} />
                    </button>
                </form>

                <p className="form-toggle">
                    Don’t have an account?{" "}
                    <button type="button" onClick={toggleForm} className="link-btn">
                    Sign up
                    </button>
                </p>
                </div>

                {/* Signup Form */}
                <div
                className={`form-panel ${isLogin ? "panel-inactive" : ""}`}
                aria-hidden={isLogin}
                >
                <h1 className="form-title">Create your account</h1>
                <p className="form-subtitle">Get started with your free account</p>
                <form className="form-fields">
                    <div className="form-row">
                    <div className="form-group">
                        <label>First name</label>
                        <div className="input-wrapper">
                        {/**<User className="icon" /> */}
                        <input name="firstName" placeholder="John" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <div className="input-wrapper">
                        {/**<User className="icon" /> */}
                        <input name="lastName" placeholder="Doe" required />
                        </div>
                    </div>
                    </div>

                    <div className="form-group">
                    <label>Email</label>
                    <div className="input-wrapper">
                        {/**<Mail className="icon" /> */}
                        <input name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        {/**<Lock className="icon" /> */}
                        <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        required
                        />
                        <button
                        type="button"
                        className="toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    </div>

                    <div className="form-group">
                    <label>Confirm password</label>
                    <div className="input-wrapper">
                        {/**<Lock className="icon" /> */}
                        <input
                        name= "confirmpassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        required
                        />
                        <button
                        type="button"
                        className="toggle-btn"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    </div>

                    <label className="terms">
                    <input type="checkbox" required /> I agree to the{" "}
                    <a href="#" className="link-btn">Terms</a> and{" "}
                    <a href="#" className="link-btn">Privacy Policy</a>
                    </label>

                    <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Creating..." : "Create account"} 
                    </button>
                </form>

                <p className="form-toggle">
                    Already have an account?{" "}
                    <button type="button" onClick={toggleForm} className="link-btn">
                    Sign in
                    </button>
                </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
