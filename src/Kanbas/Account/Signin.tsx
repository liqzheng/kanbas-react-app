import { Link } from "react-router-dom";
const Signin=() =>{
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> 
      <input id="wd-password" placeholder="password" type="password"  className="form-control mb-2" /> 
      <Link  id="wd-signin-btn"
             to="/Kanbas/Account/Profile" className="btn btn-primary w-100"> Sign in </Link> 
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
);}
export default Signin;
