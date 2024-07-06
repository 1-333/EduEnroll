// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === 'admin' && password === 'admin') {
//       localStorage.setItem('isAuthenticated', 'true');
//       localStorage.setItem('userData', JSON.stringify({ username })); // Save user data
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <>
//     <div className='container my-3'>
//       <h2>Login</h2>
//       <div>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       </div>
//       <div>
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       </div>
//       <div className='mt-2'> 
//         <button onClick={handleLogin}>Submit</button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify({ username })); // Save user data
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '300px' }}>
        <h2 className="card-title text-center">Login to EduEnroll</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control my-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-dark" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
