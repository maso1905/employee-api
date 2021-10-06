import React from 'react';
import Navbar from '././nav/Navbar';
import { 
  Container,
  Heading,  
  Form, 
  Input, 
  SearchIcon 
} from './HeaderStyling';

const Header = ({handleChange}) => {
    return (
      <Container>
        <Navbar />
          <Heading>Acme Corp.</Heading>
          <Form role="search">
            <SearchIcon />
            <Input type="text" 
              id="id" 
              name="id"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange} />
          </Form>
      </Container>
    )
}

export default Header;
