import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';

const InternList = (props) => {
  const [interns, setInterns] = useState([]);
const columns = [
  {
  name: 'FirstName',
  selector : row => row.firstName
  },
  {
    name: 'LastName',
    selector : row => row.lastName
  },
  {
    name: 'Email',
    selector : row => row.email
  },
  {
    name: 'Department',
    selector : row => row.department
  },
  {
    name: 'Gpa',
    selector : row => row.gpa
  },
  {
    name: 'Batch',
    selector : row => row.batch
  },
  {
    name: 'Date',
    selector : row => row.date
  }
];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/api/interns", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setInterns(result.data);
    };
    fetchData();
  }, []);
  
  return (
 
    <div>
      
      <h1>Intern List</h1>
      <DataTable
        columns = {columns}
        data ={interns}
        selectableRows
        pagination
         >
    
        <tbody>
          {interns.map((intern) => (
            <tr key={intern._id}>
              <td>{intern.firstName} </td>
              <td>{intern.lastName}</td>
              <td>{intern.email}</td>
              <td>{intern.department}</td>
              <td>{intern.gpa}</td>
              <td>{intern.batch}</td>
              <td>{intern.date}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );
};

export default InternList;
