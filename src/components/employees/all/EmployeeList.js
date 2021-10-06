import React, { useState, useEffect } from 'react';
import { BASE_API_URL } from '../../constants/Constants';
import Header from '../../header/Header';
import { Container, List, ListItem, EmployeeLink } from './EmployeeStyling';

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${BASE_API_URL}/employees`)
    .then(response => response.json())
    .then(data => setData(data.data))
    .catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filterEmployees = data.filter(employee =>
    employee.employee_name.toLowerCase().includes(search.toLowerCase())
  );

    return (
      <>
      <Header handleChange={handleChange} />
      <Container>
        <List>
          {filterEmployees.map(employee => (
            <ListItem key={employee.id}>
              <EmployeeLink
                to={`/employee/${employee.id}`}>
                {employee.employee_name}
              </EmployeeLink> 
            </ListItem>
          ))}
        </List>
      </Container>
      </>
    )
}

export default EmployeeList;
