import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const AllLinks = styled(Link)`
color:black;
margin:3vh;
`
  


function NavBar() {
    const {isAuth} = useContext(AuthContext)
  return (
    <div>
      
        <AllLinks to='/'>Home </AllLinks> 
        <AllLinks to='/Register'>Register</AllLinks>
        <AllLinks to='/Employees'>Employees</AllLinks>
        <AllLinks to='/LogIn'>{isAuth?"logout":"login"}Login</AllLinks>
    </div>
  )
}

export default NavBar