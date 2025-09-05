import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // add this
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'error'|'success', text }
  const [signupBtnState, setSignupBtnState] = useState({ status: "default", text: "Create account" });

  const [adminOpen, setAdminOpen] = useState(false);
  // admin form state
  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminMsg, setAdminMsg] = useState(null);
  const adminAnimationDuration = 600; // keep in sync with CSS transition (ms)

  // toggle admin panel
  function toggleAdminPanel() {
    setAdminMsg(null);
    setAdminOpen((s) => !s);
    }

  // add alongside existing state

  const [loginBtnState, setLoginBtnState] = useState({ status: "default", text: "Sign in" });
  const loginTimerRef = useRef(null);
  const loginEmailRef = useRef(null);
  const timerRef = useRef(null);
  const animationDuration = 500;

  useEffect(() => {
    return () => {
      // cleanup any leftover timers on unmount
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const clearTempStates = () => {
    // clear message and button state after timeout
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMessage(null);
      setSignupBtnState({ status: "default", text: "Create account" });
      timerRef.current = null;
    }, 1500); // 1.5 seconds
  };

  const toggleForm = () => {
    setMessage(null);
    setIsLogin((s) => !s);
  };

  useEffect(() => {
    // blur any offscreen element to avoid weird focus
    if (document.activeElement && !document.activeElement.closest?.(".login-form")) {
      document.activeElement.blur();
    }
  }, [isLogin]);

  useEffect(() => {
    return () => {
      if (timerRef?.current) clearTimeout(timerRef.current);       // signup timer (if present)
      if (loginTimerRef?.current) clearTimeout(loginTimerRef.current);
    };
  }, []);

  async function handleSignupSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setMessage(null);

    const form = e.currentTarget;
    const f = new FormData(form);
    const firstName = f.get("firstName")?.trim();
    const lastName = f.get("lastName")?.trim();
    const email = f.get("signupEmail")?.trim();
    const password = f.get("signupPassword");
    const confirm = f.get("signupConfirm");

    if (!password || !confirm || password !== confirm) {
      setMessage({ type: "error", text: "Passwords do not match." });
      setSignupBtnState({ status: "error", text: "Error" });
      clearTempStates();
      return;
    }

    if (!email) {
      setMessage({ type: "error", text: "Please provide an email." });
      setSignupBtnState({ status: "error", text: "Error" });
      clearTempStates();
      return;
    }

    setLoading(true);
    try {
      // replace with actual API call
      await new Promise((res) => setTimeout(res, 700)); // mock delay

      // success
      setMessage({ type: "success", text: "Account created successfully." });
      setSignupBtnState({ status: "success", text: "Created" });

      // switch to login panel
      setIsLogin(true);
      form.reset();

      // focus login email after animation
      setTimeout(() => {
        loginEmailRef.current?.focus?.();
      }, animationDuration + 40);

      clearTempStates();
    } catch (err) {
      const text = err?.message || "Signup failed. Try again.";
      setMessage({ type: "error", text });
      setSignupBtnState({ status: "error", text: "Error" });
      clearTempStates();
    } finally {
      setLoading(false);
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
  if (loading) return;
  setMessage(null);

  const form = e.currentTarget;
  const f = new FormData(form);
  const email = f.get("loginEmail")?.trim();
  const password = f.get("loginPassword");

  if (!email || !password) {
    setMessage({ type: "error", text: "Please enter email and password." });
    setLoginButtonTemp("error", "Error");
    return;
  }

  setLoading(true);

  try {
    // === Hard-coded authentication ===
    const hardUsername = "admin@theo.com";
    const hardPassword = "admin1234";

    // mimic small network delay (optional)
    await new Promise((res) => setTimeout(res, 300));

    if (email === hardUsername && password === hardPassword) {
      setMessage({ type: "success", text: "Logged in successfully. Redirecting..." });
      setLoginButtonTemp("success", "Signed In");

      // small delay so user sees message (adjust if you want immediate redirect)
      setTimeout(() => {
        // navigate to dashboard
        navigate("/Dashboard");
      }, 400);
    } else {
      setMessage({ type: "error", text: "Invalid credentials." });
      setLoginButtonTemp("error", "Error");
    }
  } catch (err) {
    setMessage({ type: "error", text: err?.message || "Login failed." });
    setLoginButtonTemp("error", "Error");
  } finally {
    setLoading(false);
  }
  }

  async function handleAdminLogin(e) {
    e.preventDefault();
    setAdminMsg(null);
  
    // basic validation
    if (!adminUser || !adminPass) {
      setAdminMsg({ type: "error", text: "Please enter both username and password." });
      return;
    }
  
    // mock delay / auth check (replace with real API)
    try {
      await new Promise((r) => setTimeout(r, 400));
      // demo credentials (change if you want)
      if (adminUser === "admin@theo.com" && adminPass === "admin1234") {
        setAdminMsg({ type: "success", text: "Admin authenticated." });
        // do admin navigation or show admin dashboard, etc.
        // e.g. navigate('/admin-dashboard');
              // small delay so user sees message (adjust if you want immediate redirect)
        setTimeout(() => {
          // navigate to dashboard
          navigate("/Admin-Dashboard");
        }, 400);
      } else {
        setAdminMsg({ type: "error", text: "Invalid admin credentials." });
      }
    } catch (err) {
      setAdminMsg({ type: "error", text: "Login failed. Try again." });
    }
  
    // optional: auto-hide admin panel after success
    if (adminUser === "admin@theo.com" && adminPass === "admin1234") {
      setTimeout(() => setAdminOpen(false), adminAnimationDuration + 250);
    }
  }

  // call this to set a temporary button state (status: "success" | "error")
    // it will auto-reset after 5s and also clear any previous login timer
    function setLoginButtonTemp(status, text, clearMessage = true) {
        // clear previous timer if any
        if (loginTimerRef.current) {
        clearTimeout(loginTimerRef.current);
        loginTimerRef.current = null;
        }
    
        // update button state immediately
        setLoginBtnState({ status, text });
    
        // optionally also clear the global message after the same time,
        // or you can keep message handling separate
        loginTimerRef.current = setTimeout(() => {
        setLoginBtnState({ status: "default", text: "Sign in" });
        if (clearMessage) setMessage(null);
        loginTimerRef.current = null;
        }, 5000); // 5 seconds
    }

  // helper for signup button classes
  const signupBtnClass = () => {
    if (signupBtnState.status === "success") return "submit-btn success";
    if (signupBtnState.status === "error") return "submit-btn error";
    return "submit-btn";
  };

  return (
    <div className="login-container">
      <div className="login-box">
              
        {/* Left Side - Image 
        <div className="login-image">
          <img src=".././images/hero.jpeg" alt="Auth background" />
          <div className="overlay" />
        </div>*/}
        <div className="login-image">
        {/* Admin panel sits underneath (z-index lower) */}
        <div className={`admin-panel ${adminOpen ? "open" : ""}`}>
            <div className="admin-inner">
            <h3 className="admin-title">Admin Login</h3>

            {adminMsg && (
                <div className={`admin-msg ${adminMsg.type === "error" ? "error" : "success"}`}>
                {adminMsg.text}
                </div>
            )}

            <form className="admin-form" onSubmit={handleAdminLogin}>
                <input
                type="email"
                placeholder="Admin email"
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                aria-label="Admin email"
                />
                <input
                type={adminOpen && adminPass ? (showPassword ? "text" : "password") : "password"} 
                placeholder="Password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                aria-label="Admin password"
                />

                <div className="admin-actions">
                <button type="submit" className="admin-submit">Sign in</button>
                <button
                    type="button"
                    className="admin-cancel"
                    onClick={() => { setAdminUser(""); setAdminPass(""); setAdminMsg(null); setAdminOpen(false); }}
                >
                    Cancel
                </button>
                </div>
            </form>
            </div>
        </div>
        {/* The actual image (on top) - it will translate right when adminOpen=true */}
        <img
            src=".././images/hero.jpeg"
            alt="Auth background"
            className={`hero-img ${adminOpen ? "shift-right" : ""}`}
        />


        {/* glassy toggle button on top-left of image */}
        <button
            className={`glassy-admin-btn ${adminOpen ? "active" : ""}`}
            onClick={toggleAdminPanel}
            aria-expanded={adminOpen}
            aria-controls="admin-panel"
            title={adminOpen ? "Close admin panel" : "Open admin panel"}
        >
            Login as Admin
        </button>

        <div className="overlay" />
        </div>


        {/* Right Side - Forms */}
        <div className="login-form" style={{ position: "relative" }}>
          {/* message area (positioned absolutely via CSS) */}
          {message && (
            <div
              className={`auth-message ${message.type === "error" ? "error" : "success"}`}
              role={message.type === "error" ? "alert" : "status"}
            >
              {message.text}
            </div>
          )}
          <Link to="/" className="back-btn" aria-label="Back to landing page">← Back</Link>

          <div className={`form-slider ${isLogin ? "show-login" : "show-signup"}`}>
            {/* LOGIN PANEL */}
            <div className={`form-panel ${isLogin ? "" : "panel-inactive"}`} aria-hidden={!isLogin}>
              <h1 className="form-title">Welcome back</h1>
              <p className="form-subtitle">Please sign in to your account</p>

              <form className="form-fields" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    {/**<Mail className="icon" /> */}
                    <input name="loginEmail" ref={loginEmailRef} type="email" placeholder="Enter your email" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-wrapper">
                    {/**<Lock className="icon" /> */}
                    <input name="loginPassword" type={showPassword ? "text" : "password"} placeholder="Enter your password" required />
                    <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button" className="link-btn">Forgot password?</button>
                </div>

                <button
                    type="submit"
                    className={loginBtnState.status === "default" ? "submit-btn" : `submit-btn ${loginBtnState.status}`}
                    disabled={loading}
                >
                {loading ? "Signing…" : loginBtnState.text} <ArrowRight size={18} />
                </button>
              </form>

              <p className="form-toggle">
                Don’t have an account?{" "}
                <button type="button" onClick={() => { setMessage(null); setIsLogin(false); }} className="link-btn">Sign up</button>
              </p>
            </div>

            {/* SIGNUP PANEL */}
            <div className={`form-panel ${isLogin ? "panel-inactive" : ""}`} aria-hidden={isLogin}>
              <h1 className="form-title">Create your account</h1>
              <p className="form-subtitle">Get started with your free account</p>

              <form className="form-fields" onSubmit={handleSignupSubmit}>
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
                    <input name="signupEmail" type="email" placeholder="Enter your email" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-wrapper">
                    {/**<Lock className="icon" /> */}
                    <input name="signupPassword" type={showPassword ? "text" : "password"} placeholder="Create a password" required />
                    <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm password</label>
                  <div className="input-wrapper">
                    {/**<Lock className="icon" /> */}
                    <input name="signupConfirm" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" required />
                    <button type="button" className="toggle-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <label className="terms">
                  <input type="checkbox" required /> I agree to the{" "}
                  <a href="#" className="link-btn">Terms</a> and{" "}
                  <a href="#" className="link-btn">Privacy Policy</a>
                </label>

                <button
                  type="submit"
                  className={signupBtnClass()}
                  disabled={loading}
                >
                  {signupBtnState.text} <ArrowRight size={18} />
                </button>
              </form>

              <p className="form-toggle">
                Already have an account?{" "}
                <button type="button" onClick={() => { setMessage(null); setIsLogin(true); }} className="link-btn">Sign in</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* OVERLAY LAYER FOR THE SLIDING IMAGE 
        <div className="hero-layer">
        <img
            src=".././images/hero.jpeg"
            alt="Auth background"
            className={`hero-img ${adminOpen ? "shift-right" : ""}`}
        />
        {/* if you have the glassy Admin button, you can keep it here too */}
        {/*<button className={`glassy-admin-btn ${adminOpen ? "active" : ""}`} onClick={toggleAdminPanel}>Admin</button>
        </div>*/}
    </div>
  );
}
