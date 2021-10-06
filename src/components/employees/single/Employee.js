import React from 'react';
import { 
  DetailContainer, 
  Form, 
  FormItemWrapper,
  Input,
  Label, 
  Name, 
  Image, 
  Row, 
} from './SingleEmployeeStyling';
import { avatar } from '../../constants/Constants';

const Employee = (props) => {

  const addDefaultSrc = (ev) => {
    ev.target.src = avatar;
  };

  return (
    <DetailContainer>
      <Row>
        <Image onError={addDefaultSrc} src={props.image} alt={props.name} />
        <Name>{props.name}</Name>
        <Form>
          <FormItemWrapper>
            <Label htmlFor="id">ID:</Label>
            <Input value={props.id} type="text" id="id" name="id" disabled />
          </FormItemWrapper>
          <FormItemWrapper>
            <Label htmlFor="age">Age:</Label>
            <Input value= {props.age} type="text" id="age" name="age" disabled /> 
          </FormItemWrapper>
          <FormItemWrapper>
            <Label htmlFor="salary">Salary:</Label>
            <Input value={props.salary} type="text" id="salary" name="salary" disabled /> 
          </FormItemWrapper>
        </Form>
      </Row>
    </DetailContainer>
  );
};

export default Employee;
