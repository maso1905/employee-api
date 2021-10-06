import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../components/constants/Constants';
import Header from '../components/header/Header';
import Employee from '../components/employees/single/Employee';

const EmployeeDetail = () => {
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`${BASE_API_URL}/employee/${params.id}`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.log(error))
    }, [params.id]);

    return (
      <>
        <Header />
          <Employee 
            key={data.id}
            id={data.id} 
            image={data.profile_image}
            name={data.employee_name}
            salary={data.employee_salary}
            age={data.employee_age} />
      </>
    );
};

export default EmployeeDetail;