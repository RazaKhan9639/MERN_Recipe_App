import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};
export default Auth;

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// import React, { useState } from "react";
// import axios from "axios";
// const Auth = () => {
//   return (
//     <div className="auth">
//       <Login />
//       <Register />
//     </div>
//   );
// };

// export default Auth;

// // Path: client\src\pages\CreateRecipe.jsx
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3001/auth/login", {
//         username,
//         password,
//       });
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       label="Login"
//       onSubmit={handleSubmit()}
//     />
//   );
// };

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/auth/register", {
//         username,
//         password,
//       });
//       alert("User Created Successfully, Please Login");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       label="Register"
//       onSubmit={onSubmit()}
//     />
//   );
// };

// const Form = ({
//   username,
//   setUsername,
//   password,
//   setPassword,
//   label,
//   onSubmit,
// }) => {
//   return (
//     <div className="auth-container">
//       <form action="" onSubmit={onSubmit}>
//         <h2>{label}</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="text"
//             name="username"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">{label}</button>
//       </form>
//     </div>
//   );
// };
