// import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const Profile = () => {
//   const [studentData, setStudentData] = useState({});
//   // const [students, setStudents] = useState([]);
// //   const Navigate = useNavigate();

//   useEffect(() => {
//     const studentData = localStorage.getItem('studentData');
//     if (studentData) {
//       setStudentData(JSON.parse(studentData));
//       // setStudents(JSON.parse(studentData));
//     }
//   }, []);

//   const handleToggleActive = () => {
//     const updatedStudentData = { ...studentData, active: !studentData.active };
//     localStorage.setItem('studentData', JSON.stringify(updatedStudentData));
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Profile</h1>
//       <p>First Name: {studentData.firstName}</p>
//       <p>Last Name: {studentData.lastName}</p>
//       <p>Email: {studentData.email}</p>
//       <p>Mobile Number: {studentData.mobileNumber}</p>
//       <p>Active: {studentData.active ? 'Yes' : 'No'}</p>
//       <button onClick={handleToggleActive}>Toggle Active</button>
//     </div>
//   );
// };

// export default Profile;