// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const AddStudent = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [active, setActive] = useState(true);
//   const navigate = useNavigate();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const studentData = {
//   //     firstName,
//   //     lastName,
//   //     email,
//   //     mobileNumber,
//   //   };
//   //   localStorage.setItem('studentData', JSON.stringify(studentData));
//   //   navigate('/home', { replace: true });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //     const studentsData = localStorage.getItem('students');
//   //     const students = studentsData? JSON.parse(studentsData) : [];
//   //     students.push({ firstName, lastName, email, mobileNumber, active: true });
//   //     localStorage.setItem('students', JSON.stringify(students));
//   //     navigate('/home');
//   // };

//   const handleSubmit= (e) => {
//     e.preventDefault();
//     const newStudent = {
//       id: Math.random(),
//       firstName,
//       lastName,
//       email,
//       mobileNumber,
//       active,
//     };
//         // Read the existing students from students.json
//         const existingStudents = JSON.parse(localStorage.getItem('students') || '[]');

//         // Add the new student to the existing students array
//         const updatedStudents = [...existingStudents, newStudent];
//         console.log(updatedStudents)
    
//         // Save the updated students array to local storage
//         localStorage.setItem('students', JSON.stringify(updatedStudents));
    
//         // Redirect to the Home page
//         navigate('/home');
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='container my-3'>
//       <h2>Add Student</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='mt-3'>
//         <label>First Name : </label>
//         <input className='mx-2' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         </div>
        
//         <div className='mt-3'>
//         <label>Last Name : </label>
//         <input className='mx-2' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//         </div>
        
//         <div className='mt-3'>
//         <label>Email : </label>
//         <input className='mx-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div className='mt-3'>
//         <label>Mobile Number : </label>
//         <input className='mx-2' type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
//         </div>
        
//         <div className='mt-3'>
//         <label>
//           Active : <input className='mx-2' type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
//         </label>
//         </div>

//         <div className='mt-3'>
//           <button type="submit">Add Student</button>
//         </div>
        
//       </form>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css'

const AddStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.random(),
      firstName,
      lastName,
      email,
      mobileNumber,
      active,
    };
    const existingStudents = JSON.parse(localStorage.getItem('students') || '[]');
    const updatedStudents = [...existingStudents, newStudent];
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/home');
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: '400px' }}>
          <h2 className="card-title text-center">Add Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label>First Name:</label>
              <input
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name:</label>
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email:</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile Number:</label>
              <input
                className="form-control"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="form-group form-check mt-3">
              <label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
                Active
              </label>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-dark" type="submit">Add Student</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
