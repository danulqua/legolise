/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <div className='footer font-small pt-4 mt-4'>
      <Container fluid className='text-center text-md-left'>
        <Row className='footer-row'>
          <Col md='6' className='col-footer'>
            <h5 className='title'>About us</h5>
            <ul>
              <li className='col-list'>
                <NavLink href='/'>Contacts</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>More info</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>About us</NavLink>
              </li>
            </ul>
          </Col>
          <Col md='6' className='col-footer' id='col1'>
            <h5 className='title'>More info</h5>
            <ul>
              <li className='col-list'>
                <NavLink href='/'>Contacts</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>More info</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>About us</NavLink>
              </li>
            </ul>
          </Col>
          <Col md='6' className='col-footer' id='col2'>
            <h5 className='title'>Contacts</h5>
            <ul>
              <li className='col-list'>
                <NavLink href='/'>Contacts</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>More info</NavLink>
              </li>
              <li className='col-list'>
                <NavLink href='/'>About us</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className='footer-copyright text-center py-3'>
        <Container fluid>&copy; {new Date().getFullYear()} Copyright:</Container>
      </div>
    </div>
  );
};

export default Footer;
