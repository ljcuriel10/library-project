import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import { IconContext } from 'react-icons';
import {FaHome, FaHiking, FaRegPaperPlane} from 'react-icons/fa'



const NavigationBar = () => (
    <IconContext.Provider value={{style: {color:'orange'}}}>
        <Navbar bg='dark' variant='dark' expand="lg">
            <Navbar.Brand href="/">Luis's Bookstore</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='ml-auto'>
                    <Nav.Item>
                       
                        <Nav.Link href='/'><FaHome/> Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'><FaHiking /> About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'><FaRegPaperPlane /> Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </IconContext.Provider>
  )


export default NavigationBar