import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: black;
    }

    .navbar-brand, .nav-link {
        color: white;

        &:hover {
            color: white;
        }
    }
`

const NavigationBar = () => (
    <Styles>
        <Navbar bg='dark' variant='dark' expand="lg">
            <Navbar.Brand href="/">Luis's Bookstore</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='ml-auto'>
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
  )


export default NavigationBar