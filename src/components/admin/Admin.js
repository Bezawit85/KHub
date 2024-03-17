import { useAuth } from "./AuthProvider";
import "./Admin.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const auth = useAuth();
  const [interns, setInterns] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/interns", {
      
      });
      setInterns(result.data);
    };
    fetchData();
  }, [])
 
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <div>
      <h1>Interns</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>GPA</th>
            <th>Batch</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern) => (
            <tr key={intern._id}>
              <td>{intern.firstName} {intern.lastName}</td>
              <td>{intern.email}</td>
              <td>{intern.department}</td>
              <td>{intern.gpa}</td>
              <td>{intern.batch}</td>
              <td>{intern.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <button onClick={logoutHandler}>logout</button>
    </>
  );
}

export default Test;
