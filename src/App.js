import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeList from './components/employees/all/EmployeeList';
import EmployeeDetail from './pages/detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EmployeeList} />
        <Route path="/employee/:id" component={EmployeeDetail} />
      </Switch>
    </Router>
  );
};

export default App;
