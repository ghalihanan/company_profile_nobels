import React from "react";

const Login = () => {
  return <div className="container">
   <div className="percobaan">
    <p>Menu Login</p>
    <div className="form">
      <form action="#" method="post">
        <p>Isi Username</p>
        <input type="text" name="username" placeholder="Username"></input>

        <p>Isi Password</p>
        <input type="text" name="Password" placeholder="Password"></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  </div>
</div>;
};

export default Login;
