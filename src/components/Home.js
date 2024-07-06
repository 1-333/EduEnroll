// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// // import studentData from'./students.json'

// const Home = () => {
//   const [students, setStudents] = useState([]);
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [activeStudents, setActiveStudents] = useState(0);
//   const [inactiveStudents, setInactiveStudents] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = localStorage.getItem('userData');
//     if (!userData) {
//       navigate('/login');
//     } else {
//       const storedStudents = localStorage.getItem('students');
//       if (storedStudents) {
//         const parsedStudents = JSON.parse(storedStudents);
//         setStudents(parsedStudents);
//       }
//     }
//   }, [navigate]); // Including navigate in the dependency array

//   useEffect(() => {
//     setTotalStudents(students.length);
//     setActiveStudents(students.filter(students => students.active).length);
//     setInactiveStudents(students.filter(students => !students.active).length);
//   }, [students]); // Effect dependent on students

//   // useEffect(() => {
//   //   const userData = localStorage.getItem('userData');
//   //   if (!userData) {
//   //   navigate('/login');
//   //   }
//   //   const studentsData = localStorage.getItem('students');
//   //   if (studentsData) {
//   //     const students = JSON.parse(studentsData);
//   //     // setStudents(JSON.parse(studentsData));
//   //     setTotalStudents(students.length);
//   //     setActiveStudents(students.filter((student) => student.active).length);
//   //     setInactiveStudents(students.filter((student) =>!student.active).length);
//   //   }
//   // }, [navigate]);

//   // useEffect(() => {
//   //   const userData = localStorage.getItem('userData');
//   //   if (!userData) {
//   //     navigate('/login');
//   //   }
//   // }, [navigate]);

//   // useEffect(() => {
//   //   setTotalStudents(students.length);
//   //   setActiveStudents(students.filter((student) => student.active).length);
//   //   setInactiveStudents(students.filter((student) =>!student.active).length);
//   // }, [students]);

//   const handleToggleActive = (id) => {
//     const updatedStudents = students.map((student) => {
//       if (student.id === id) {
//         return { ...student, active: !student.active };
//       }
//       return student;
//     });
//     setStudents(updatedStudents);
//     localStorage.setItem('students', JSON.stringify(updatedStudents));
//   };

//   // const handleResetStats = () => {
//   //   localStorage.removeItem('students');
//   //   setTotalStudents(0);
//   //   setActiveStudents(0);
//   //   setInactiveStudents(0);
//   // };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//       <main>
//         <h1 className='mt-3'>Home</h1>
//         <p>No. of total students enrolled: {totalStudents}</p>
//         <p>No. of Active students: {activeStudents}</p>
//         <p>No. of Inactive students: {inactiveStudents}</p>

//         <h2>Student List:</h2>
//         <ul>
//           {students.map((student) => (
//             <li key={student.id}>
//               {student.firstName} {student.lastName} - {student.email} - {student.mobileNumber}
              
//               <label className='mx-3'>
//                 <input type="checkbox" checked={student.active} onChange={()=> handleToggleActive(student.id)} />
//                 Active
//               </label>
//               <br />
//             </li>
//           ))}
//         </ul>
//         {/* <button onClick={handleResetStats}>Reset Stats</button> */}
//       </main>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import './styles.css'; // Ensure this path is correct and points to your CSS file

const Home = () => {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [activeStudents, setActiveStudents] = useState(0);
  const [inactiveStudents, setInactiveStudents] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      navigate('/login');
    } else {
      const storedStudents = localStorage.getItem('students');
      if (storedStudents) {
        const parsedStudents = JSON.parse(storedStudents);
        setStudents(parsedStudents);
      }
    }
  }, [navigate]);

  useEffect(() => {
    setTotalStudents(students.length);
    setActiveStudents(students.filter(students => students.active).length);
    setInactiveStudents(students.filter(students => !students.active).length);
  }, [students]);

  const handleToggleActive = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, active: !student.active };
      }
      return student;
    });
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container mt-5">
        <main>
          <div className="text-center">
            <h1>Welcome to EduEnroll - Student Management System</h1>
            <p className="lead">Manage your student data effectively</p>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-4">
              <div className="card bg-primary text-white mb-3">
                <div className="card-body">
                  <h3 className="card-title">Total Students</h3>
                  <p className="card-text display-4">{totalStudents}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-success text-white mb-3">
                <div className="card-body">
                  <h3 className="card-title">Active Students</h3>
                  <p className="card-text display-4">{activeStudents}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-danger text-white mb-3">
                <div className="card-body">
                  <h3 className="card-title">Inactive Students</h3>
                  <p className="card-text display-4">{inactiveStudents}</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-5">Student List</h2>
          <div className="table-responsive">
            <table className="table table-hover mt-3">
              <thead className="thead-dark">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.mobileNumber}</td>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={student.active}
                          onChange={() => handleToggleActive(student.id)}
                        />
                        <label className="form-check-label">
                          {student.active ? 'Active' : 'Inactive'}
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
